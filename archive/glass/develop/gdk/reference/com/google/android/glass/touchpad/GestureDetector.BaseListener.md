# GestureDetector.BaseListener

Added in API level XE12

Receives detection results. This listener receives discrete gestures: TAP, LONG_PRESS SWIPE_UP, SWIPE_LEFT, SWIPE_RIGHT, SWIPE_DOWN

| Public Methods | |
| --- | --- |
| abstract boolean | [onGesture](#onGesture)([Gesture](Gesture.md) gesture) |

## Public Methods

Added in API level XE12

#### public abstract boolean **onGesture** ([Gesture](Gesture.md) gesture)

Called when a gesture was recognized.

Only one gesture will be recognized per event sequence.

##### Parameters

gesture - the detected gesture

##### Returns
- `true` if the gesture was handled

--- 

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
