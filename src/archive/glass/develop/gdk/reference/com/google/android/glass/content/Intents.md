# Intents

Added in API level XE18.1

Definition of platform intent actions and extras.

| Constants | | |
| --- | --- | --- |
| [String](http://developer.android.com/reference/java/lang/String.html) | [ACTION_ON_HEAD_STATE_CHANGED](#ACTION_ON_HEAD_STATE_CHANGED) | Broadcast action: sent when the user starts or stops wearing the device. |
| [String](http://developer.android.com/reference/java/lang/String.html) | [EXTRA_IS_ON_HEAD](#EXTRA_IS_ON_HEAD) | Boolean extra denoting whether the user is wearing the device. |
| [String](http://developer.android.com/reference/java/lang/String.html) | [EXTRA_PICTURE_FILE_PATH](#EXTRA_PICTURE_FILE_PATH) | String extra holding the file path of the picture. |
| [String](http://developer.android.com/reference/java/lang/String.html) | [EXTRA_THUMBNAIL_FILE_PATH](#EXTRA_THUMBNAIL_FILE_PATH) | String extra holding the file path of the thumbnail representing a captured picture or video. |
| [String](http://developer.android.com/reference/java/lang/String.html) | [EXTRA_VIDEO_FILE_PATH](#EXTRA_VIDEO_FILE_PATH) | String extra holding the file path of the video. |



| Inherited Methods | |
| --- | --- |
| From class java.lang.Object | |
| [Object](http://developer.android.com/reference/java/lang/Object.html) | clone() |
| boolean | equals([Object](http://developer.android.com/reference/java/lang/Object.html) arg0) |
| void | finalize()|
| final [Class](https://developer.android.com/reference/java/lang/Class.html)\<?\> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| [String](https://developer.android.com/reference/java/lang/String.html) | toString() |
| final void | wait() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |

## Constants

Added in API level XE18.1

#### public static final [String](http://developer.android.com/reference/java/lang/String.html) **ACTION_ON_HEAD_STATE_CHANGED** 

Broadcast action: sent when the user starts or stops wearing the device.

This is a protected intent that can only be sent by the system.

##### See Also

-   [`EXTRA_IS_ON_HEAD`](#EXTRA_IS_ON_HEAD)

Constant Value: "com.google.android.glass.action.ON_HEAD_STATE_CHANGED"

Added in API level XE18.1

#### public static final [String](http://developer.android.com/reference/java/lang/String.html) **EXTRA_IS_ON_HEAD** 

Boolean extra denoting whether the user is wearing the device.

##### See Also

-   [`ACTION_ON_HEAD_STATE_CHANGED`](#ACTION_ON_HEAD_STATE_CHANGED)

Constant Value: "is_on_head"

Added in API level XE18.1

#### public static final [String](http://developer.android.com/reference/java/lang/String.html) **EXTRA_PICTURE_FILE_PATH** 

String extra holding the file path of the picture.

##### See Also

-   [`ACTION_IMAGE_CAPTURE`](http://developer.android.com/reference/android/provider/MediaStore.html#ACTION_IMAGE_CAPTURE)

Constant Value: "picture_file_path"

Added in API level XE18.1

#### public static final [String](http://developer.android.com/reference/java/lang/String.html) **EXTRA_THUMBNAIL_FILE_PATH** 

String extra holding the file path of the thumbnail representing a captured picture or video.

##### See Also

-   [`ACTION_IMAGE_CAPTURE`](http://developer.android.com/reference/android/provider/MediaStore.html#ACTION_IMAGE_CAPTURE)`
-   [`ACTION_VIDEO_CAPTURE`](http://developer.android.com/reference/android/provider/MediaStore.html#ACTION_VIDEO_CAPTURE)

Constant Value: "thumbnail_file_path"

Added in API level XE18.1

#### public static final [String](http://developer.android.com/reference/java/lang/String.html) **EXTRA_VIDEO_FILE_PATH** 

String extra holding the file path of the video.

##### See Also

-   [`ACTION_VIDEO_CAPTURE`](http://developer.android.com/reference/android/provider/MediaStore.html#ACTION_VIDEO_CAPTURE)

Constant Value: "video_file_path"

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
