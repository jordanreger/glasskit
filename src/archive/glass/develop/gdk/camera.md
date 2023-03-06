# Camera

You can use the Glass camera to capture images and video and to also display the camera's preview stream for a variety of different use cases.

## Overview

You have two options for capturing images or video:

-   Calling the built-in camera activity with [`startActivityForResult()`](https://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent,%20int)). Use this option when possible.
-   Building your own logic with the [Android Camera API](https://developer.android.com/reference/android/hardware/Camera.html). Follow these guidelines if you are using this method:
	-   Take a picture on a camera button click and a video on a long click, just like Glass does.
	-   Indicate to the user whether a picture was taken or a video was recorded.
	-   Keep the screen on during capture.

## Sharing the camera with the Glass system

If your Glassware uses the Android APIs to access the camera, temporarily release the camera when possible if users press the hardware camera button.

1.  Override the [`onKeyDown()`](https://developer.android.com/reference/android/app/Activity.html#onKeyDown(int,%20android.view.KeyEvent)) method in your activity and intercept [`KEYCODE_CAMERA`](https://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAMERA) to handle camera button presses.
2.  Release the camera and return `false` to indicate that you did not consume the event so that the built-in Glass camera starts.

> **Note**: If you return `true` from [`onKeyDown()`](https://developer.android.com/reference/android/app/Activity.html#onKeyDown(int,%20android.view.KeyEvent)), your activity consumes the event and the Glass camera doesn't start. Do this only if there is no way to interrupt your activity's use of the camera (for example, if you are capturing continuous video).

3. After the image or video capture takes place, Glass returns to your activity, where you can reclaim the camera in [`onResume()`](https://developer.android.com/reference/android/app/Activity.html#onResume()).

```java
@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
    if (keyCode == KeyEvent.KEYCODE_CAMERA) {
        // Stop the preview and release the camera.
        // Execute your logic as quickly as possible
        // so the capture happens quickly.
        return false;
    } else {
        return super.onKeyDown(keyCode, event);
    }
}

@Override
protected void onResume() {
    super.onResume();
    // Re-acquire the camera and start the preview.
}
```

## Capturing images or video

### Images

To capture an image using the built-in Camera Glassware:

1.  Call [`startActivityForResult(Intent, int)`](https://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent,%0Aint)) with the action set as [`ACTION_IMAGE_CAPTURE`](https://developer.android.com/reference/android/provider/MediaStore.html#ACTION_IMAGE_CAPTURE).
2.  In [`onActivityResult(int, int, android.content.Intent)`](https://developer.android.com/reference/android/app/Activity.html#onActivityResult(int,%20int,%20android.content.Intent)):
	a.  Ensure that the `requestCode` matches the request code used when starting the image capture intent.
    b.  Ensure that the `resultCode` matches [`RESULT_OK`](https://developer.android.com/reference/android/app/Activity.html#RESULT_OK).
    c.  Obtain the path to the image's thumbnail from the [`Intent`](https://developer.android.com/reference/android/content/Intent.html)'s extra with the [`EXTRA_THUMBNAIL_FILE_PATH`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/content/Intents#EXTRA_THUMBNAIL_FILE_PATH) [**TODO**: ADD LINK] key, if necessary.
	d.  The path to the full image is available from the [`Intent`](https://developer.android.com/reference/android/content/Intent.html)'s extra with the [`EXTRA_PICTURE_FILE_PATH`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/content/Intents#EXTRA_PICTURE_FILE_PATH) [**TODO**: ADD LINK] key. When the image capture intent returns control to your Glassware, the image might not be fully written to file. Verify that the image file exists or use a [`FileObserver`](https://developer.android.com/reference/android/os/FileObserver.html) to monitor its parent directory. When the full image is available, load the file and use it in your Glassware.

```java
private static final int TAKE_PICTURE_REQUEST = 1;

private void takePicture() {
    Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    startActivityForResult(intent, TAKE_PICTURE_REQUEST);
}

@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    if (requestCode == TAKE_PICTURE_REQUEST && resultCode == RESULT_OK) {
        String thumbnailPath = data.getStringExtra(Intents.EXTRA_THUMBNAIL_FILE_PATH);
        String picturePath = data.getStringExtra(Intents.EXTRA_PICTURE_FILE_PATH);

        processPictureWhenReady(picturePath);
        // TODO: Show the thumbnail to the user while the full picture is being
        // processed.
    }

    super.onActivityResult(requestCode, resultCode, data);
}

private void processPictureWhenReady(final String picturePath) {
    final File pictureFile = new File(picturePath);

    if (pictureFile.exists()) {
        // The picture is ready; process it.
    } else {
        // The file does not exist yet. Before starting the file observer, you
        // can update your UI to let the user know that the application is
        // waiting for the picture (for example, by displaying the thumbnail
        // image and a progress indicator).

        final File parentDirectory = pictureFile.getParentFile();
        FileObserver observer = new FileObserver(parentDirectory.getPath(),
                FileObserver.CLOSE_WRITE | FileObserver.MOVED_TO) {
            // Protect against additional pending events after CLOSE_WRITE
            // or MOVED_TO is handled.
            private boolean isFileWritten;

            @Override
            public void onEvent(int event, String path) {
                if (!isFileWritten) {
                    // For safety, make sure that the file that was created in
                    // the directory is actually the one that we're expecting.
                    File affectedFile = new File(parentDirectory, path);
                    isFileWritten = affectedFile.equals(pictureFile);

                    if (isFileWritten) {
                        stopWatching();

                        // Now that the file is ready, recursively call
                        // processPictureWhenReady again (on the UI thread).
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                processPictureWhenReady(picturePath);
                            }
                        });
                    }
                }
            }
        };
        observer.startWatching();
    }
}
```

### Videos

To capture a video using the built-in Camera Glassware:

1.  Call [`startActivityForResult(Intent, int)`](https://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent,%0Aint)) with the action set as [`ACTION_VIDEO_CAPTURE`](https://developer.android.com/reference/android/provider/MediaStore.html#ACTION_VIDEO_CAPTURE).
2.  In [`onActivityResult(int, int, android.content.Intent)`](https://developer.android.com/reference/android/app/Activity.html#onActivityResult(int,%20int,%20android.content.Intent)):
    1.  Ensure that the `requestCode` matches the request code used when starting the video capture intent.
    2.  Ensure that the `resultCode` matches [`RESULT_OK`](https://developer.android.com/reference/android/app/Activity.html#RESULT_OK).
    3.  Obtain the path to the video's thumbnail from the [`Intent`](https://developer.android.com/reference/android/content/Intent.html)'s extra with the [`EXTRA_THUMBNAIL_FILE_PATH`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/content/Intents#EXTRA_THUMBNAIL_FILE_PATH) [**TODO**: ADD LINK] key to display a preview if necessary.
    4.  The path to the recorded video is available from the [`Intent`](https://developer.android.com/reference/android/content/Intent.html)'s extra with the [`EXTRA_VIDEO_FILE_PATH`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/content/Intents#EXTRA_VIDEO_FILE_PATH) [**TODO**: ADD LINK] key.

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
