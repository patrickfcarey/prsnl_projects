#!/bin/bash

# Disable read-only mode
echo "[*] Disabling read-only filesystem..."
sudo steamos-readonly disable

# Update system
echo "[*] Updating system..."
sudo pacman -Syu --noconfirm

# Install required packages
echo "[*] Installing VirtualBox and modules..."
sudo pacman -S --noconfirm virtualbox virtualbox-host-modules-arch linux-zen-headers

# Load VirtualBox kernel module
echo "[*] Loading vboxdrv module..."
sudo modprobe vboxdrv

# Add user to vboxusers
echo "[*] Adding current user to vboxusers group..."
sudo usermod -aG vboxusers $USER

# Install Extension Pack (optional)
EXT_PACK="Oracle_VM_VirtualBox_Extension_Pack-7.0.18.vbox-extpack"
if [ -f "$EXT_PACK" ]; then
    echo "[*] Installing Extension Pack..."
    sudo VBoxManage extpack install --replace "$EXT_PACK"
else
    echo "[!] Extension Pack not found: $EXT_PACK"
    echo "[!] You can download it from:"
    echo " https://www.virtualbox.org/wiki/Downloads"
fi

sudo steamos-readonly enable
echo "[✔] VirtualBox installation complete. Please reboot."
