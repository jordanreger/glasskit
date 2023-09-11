# Sounds

Added in API level XE12

Extra constants for Glass-specific sounds effects.

This set extends the existing [`AudioManager`](http://developer.android.com/reference/android/media/AudioManager.html) constants with Glass-specific sounds.


### General usage

To play a sound, call [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int)) with the desired sound. For example, to play the [`TAP`](#TAP) sound:

```java
 AudioManager audio = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
 audio.playSoundEffect(Sounds.TAP);
```

| Constants | | |
| --- | --- | --- |
| int | [DISALLOWED](#DISALLOWED) | User tried a disallowed action |
| int | [DISMISSED](#DISMISSED) | User dismissed an item. |
| int | [ERROR](#ERROR) | An error occurred. |
| int | [SELECTED](#SELECTED) | An item became selected. |
| int | [SUCCESS](#SUCCESS) | An action completed successfully. |
| int | [TAP](#TAP) | User tapped on item. |

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

Added in API level XE12

#### public static final int **DISALLOWED** 

User tried a disallowed action.

##### See Also

-   [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int))

Constant Value: 10

Added in API level XE12

#### public static final int **DISMISSED** 

User dismissed an item.

##### See Also

-   [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int))

Constant Value: 15

Added in API level XE12

#### public static final int **ERROR** 

An error occurred.

##### See Also

-   [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int))

Constant Value: 11

Added in API level XE12

#### public static final int **SELECTED** 

An item became selected.

##### See Also

-   [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int))

Constant Value: 14

Added in API level XE12

#### public static final int **SUCCESS** 

An action completed successfully.

##### See Also

-   [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int))

Constant Value: 12

Added in API level XE12

#### public static final int **TAP** 

User tapped on item.

##### See Also

-   [`playSoundEffect(int)`](http://developer.android.com/reference/android/media/AudioManager.html#playSoundEffect(int))

Constant Value: 13

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
