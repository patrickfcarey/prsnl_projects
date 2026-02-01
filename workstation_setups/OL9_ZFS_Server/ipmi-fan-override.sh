#!/bin/bash

# Supermicro IPMI fan override
# place in /usr/local/sbin/ipmi-fan-override.sh
# chmod +X this file
# place the service file into /etc/systemd/system/ipmi-fan-override.service
# run systemctl daemon-reload
# systemctl enable ipmi-fan-override.service
# Runs at boot to force manual fan speed

IPMITOOL=/usr/bin/ipmitool

# Safety delay: wait for BMC to be fully ready

sleep 35

# Put fans in Full Speed mode first (required on many boards)

ipmitool -I lan -H 192.168.68.88 -U ADMIN -P ADMIN raw 0x30 0x45 0x01 0x02

sleep 5

# Enable manual fan control and set speed
# Second to last byte controls destination
# '0x00' for the "System" fan group, "0x01" for the "Peripheral" group
# Last byte controls fan speed (0x20–0x32 is typical)

ipmitool -I lan -H 192.168.68.88 -U ADMIN -P ADMIN raw 0x30 0x70 0x66 0x01 0x00 0x20
ipmitool -I lan -H 192.168.68.88 -U ADMIN -P ADMIN raw 0x30 0x70 0x66 0x01 0x01 0x20
