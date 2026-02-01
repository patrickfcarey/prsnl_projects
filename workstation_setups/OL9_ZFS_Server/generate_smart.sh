#!/bin/bash
# Auto-generate smart_disk_info.txt
#
#
#
# to install -> place in /usr/local/sbin/generate-smart.sh
# then chmod +x /usr/local/sbin/generate-smart.sh 
OUTPUT="/etc/storage/smart_disk_info.txt"

echo "DISK INVENTORY" > "$OUTPUT"
echo "==============" >> "$OUTPUT"
echo "Format: Bay | Model | Size | Serial | Power-On Hours | Notes" >> "$OUTPUT"
echo "" >> "$OUTPUT"

# Loop through all disks by by-id
for disk in /dev/disk/by-id/ata-* /dev/disk/by-id/wwn-*; do
    realdisk=$(readlink -f "$disk")
    
    # Skip partitions
    if [[ "$realdisk" =~ [0-9]$ ]]; then
        continue
    fi
    
    # Collect SMART info
    if smartctl -i "$realdisk" &>/dev/null; then
        model=$(smartctl -i "$realdisk" | awk -F: '/Device Model|Model Family|Product:/ {print $2}' | xargs | head -1)
        serial=$(smartctl -i "$realdisk" | awk -F: '/Serial Number:/ {print $2}' | xargs | head -1)
        hours=$(smartctl -A "$realdisk" | awk '/Power_On_Hours/ {print $10}' | head -1)
    else
        model="Unknown"
        serial="Unknown"
        hours="N/A"
    fi

    # Get size
    size=$(lsblk -b -dn -o SIZE "$realdisk")
    size=$(numfmt --to=iec-i --suffix=B "$size")

    # Bay ID (optional: from partlabel or by-id name)
    bay=$(basename "$disk" | sed 's/^.*bay\([0-9]\+\).*$/\1/')

    echo "$bay | $model | $size | $serial | $hours | Auto-generated" >> "$OUTPUT"
done

echo "" >> "$OUTPUT"
echo "Last updated: $(date '+%Y-%m-%d %H:%M:%S')" >> "$OUTPUT"
