Added in API level XE12

Constants for registering Glassware with the main voice menu.

Users can start your Glassware from the main voice menu if you declare an intent filter that registers for the `com.google.android.glass.action.VOICE_TRIGGER` intent action in your activity or service.

Glassware can also declare an optional voice input prompt when it launches to obtain speech input. You can obtain the transcribed text from the `EXTRA_INPUT_SPEECH` intent extra.

For more information on how to use the constants in this class, see the [Starting Glassware](../../../../../../starting-glassware.md) developer guide.

| Nested Classes | | |
| --- | --- | --- |
| enum | [VoiceTriggers.Command](VoiceTriggers.Command.md) | Represents the list of system voice commands available. |

| Constants | | |
| --- | --- | --- |
| [String](https://developer.android.com/reference/java/lang/String.html) | [ACTION_VOICE_TRIGGER](#ACTION_VOICE_TRIGGER) | Intent action for a component triggerable by voice. |
| [String](https://developer.android.com/reference/java/lang/String.html) | [EXTRA_INPUT_SPEECH](#EXTRA_INPUT_SPEECH) | String extra storing the recognized speech. |

| Inherited Methods | |
| --- | --- |
| From class java.lang.Object | |
| [Object](https://developer.android.com/reference/java/lang/Object.html) | clone() |
| boolean | equals([Object](https://developer.android.com/reference/java/lang/Object.html) arg0) |
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

#### public static final [String](https://developer.android.com/reference/java/lang/String.html) **ACTION_VOICE_TRIGGER** 

Intent action for a component triggerable by voice.

Constant Value: "com.google.android.glass.action.VOICE_TRIGGER"

Added in API level XE12

#### public static final [String](https://developer.android.com/reference/java/lang/String.html) **EXTRA_INPUT_SPEECH** 

String extra storing the recognized speech.

Constant Value: "input_speech"

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
