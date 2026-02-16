#!/bin/bash
#install to /usr/local/bin/rclone_pull.sh
#make it executable sudo chmod +x /usr/local/bin/rclone_pull.sh

# Configuration
REMOTE="gdrive:MyDrive"       # Replace with your rclone remote and path
DEST="/mnt/zfs_dataset"       # Your ZFS dataset mount point
LOGFILE="/var/log/rclone_pull.log"

# Optional: Set rclone to use timestamps for comparisons
RCLONE_FLAGS="--update --verbose --progress --log-file=$LOGFILE"

# Perform the copy
rclone copy "$REMOTE" "$DEST" $RCLONE_FLAGS

# Optional: send a notification or echo
echo "Rclone pull completed at $(date)" >> "$LOGFILE"
