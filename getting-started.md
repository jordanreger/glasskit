# Getting Started
Getting started with your Glass is fairly complicated, but don't let it phase you! Below is an ***incomplete*** tutorial on how to get your Glass up and running.

## Installing XE24
This is a bit confusing as the instructions have changed over the years, and practically every revision recently doesn't really work. The instructions on [this page](https://web.archive.org/web/20221001235129/https://support.google.com/glass/answer/9649198?hl=en) are a great starter, but some things don’t work. Here’s a (hopefully) decent walkthrough.

## Android Studio + Google USB Driver
1. Make sure to have Android Studio installed
2. In the `tools` menu of Studio, go to the SDK manager and select the **SDK Tools** tab.
3. Select the checkbox next to **Google USB Driver** and then click **Apply** and finally **OK**.
4. Reboot the computer to make sure that it's installed.

## Allow Unsigned Drivers
This will allow us to temporarily disable driver signature enforcement. This only works in Windows.
1. Click the **Start** button, hold `Shift` and click `Restart`
2. Once it reboots, go to **Troubleshoot > Advanced options > Startup settings > Restart**
3. Press `F7` to disable driver signature enforcement
4. Open CMD as an administrator
5. Type `bcdedit /set testsigning on` and press **Enter**

## Editing the Driver
I would recommend following [this tutorial](https://web.archive.org/web/20230803213234/https://jeffzzq.scribe.rip/using-google-glass-in-2020-5f0a01188e6e) for the rest of the process.

> You must edit the driver in *both* regular mode and fastboot; otherwise `adb` will not recognize the device.

## Entering Fastboot
To enter fastboot, you must enter Recovery Mode by holding down the **camera button**, tapping the **power button** *once*, and then continuing to hold down the **camera button** for 10 seconds. Once you do this, you will see a menu with 4 options, but we want to choose **Reboot into fastboot**.

## Successful Installation of XE24
Congrats! You've successfully installed XE24 and you're ready to start using Glassware. At the moment, it's a bit of a technical process; we're working on it though! For now, [join the Discord](https://discord.gg/6xdEw33hKb) and a member of the community will be able to help you if you need it.
