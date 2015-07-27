Demo: System Media Transport Controls and Background Audio
============

This demo shows how to integrate a HTML 5 video element on your website with the Windows platform when it's running as a Hosted Web App on Windows 10. The integrations covered are with the System wide Media Controls for play, pause and volume control as well as background audio support. When the user uses the system controls the app will receive and handle the apropriate events. When the app is minimized on desktop or running in the background on phone audio will continue to play.

In order for the Windows Toast code to work you need to be running this project as a Universal Windows App on a Windows 10 device. Otherwise you'll be able to check out the video in the browser.

### To Run on Windows 10:
![img](https://raw.githubusercontent.com/wiki/seksenov/HWAToast/images/HWAToastScreenToastUp.PNG)
![img](https://raw.githubusercontent.com/wiki/seksenov/HWAToast/images/HWAToastScreenResponse.PNG)


#### Step 1
Clone the repo locally 

```
npm install
gulp appx:dev
``` 

This will start a localhost server an open a browser window and launch a hosted web app pointing to it.
You will also have an external URL that you can connect to from a mobile device.

#### Step 2
Play the video

- Use the media control to play and pause

#### Step 3
Minimize the App

- Minimize the app and notice that the audio is still playing

#### More Info
- To start your own hosted web app project from scratch check out the appx yeoman generator [here](https://github.com/MicrosoftEdge/generator-appx)
- If you have an existing web app with a JSON manifest that you'd like to publish on WIndows 10 and other platforms check out [ManifoldJS](http://www.manifoldjs.com/)
- For more info on Hosted Web Apps for Windows 10 check out [Project Wesminster in a nutshell](http://blogs.windows.com/buildingapps/2015/07/06/project-westminster-in-a-nutshell/)
