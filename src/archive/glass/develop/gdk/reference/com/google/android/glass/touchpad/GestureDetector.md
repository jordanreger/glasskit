# GestureDetector

Added in API level XE12

A gesture detector optimized to recognize touch gestures for the touchpad.

There are discrete gesture listeners (e.g., [`GestureDetector.BaseListener`](GestureDetector.BaseListener), [`GestureDetector.FingerListener`](GestureDetector.FingerListener)) and continuous gesture listeners, (e.g., [`GestureDetector.ScrollListener`](GestureDetector.ScrollListener), [`GestureDetector.OneFingerScrollListener`](GestureDetector.OneFingerScrollListener), [`GestureDetector.TwoFingerScrollListener`](GestureDetector.TwoFingerScrollListener)).

For more information, see the [Touch gestures](/archive/glass/develop/gdk/touch) developer guide.

### General usage

1.  Implement any desired listener interfaces and set them on the `GestureDetector`.
2.  Override input event callbacks such as [`onGenericMotionEvent(MotionEvent)`](http://developer.android.com/reference/android/app/Activity.html#onGenericMotionEvent(android.view.MotionEvent)) or [`dispatchGenericFocusedEvent(MotionEvent)`](http://developer.android.com/reference/android/view/View.html#dispatchGenericFocusedEvent(android.view.MotionEvent)) and pass the [`MotionEvent`](http://developer.android.com/reference/android/view/MotionEvent.html) to the gesture detector's [`onMotionEvent(MotionEvent)`](#onMotionEvent(android.view.MotionEvent)) method to process the event.
3. Handle the event appropriately in your gesture detector listeners.

> **Note**: When implementing the `onXXX` methods for listeners, set the return value to `true` only if you do not want to dispatch the [`MotionEvent`](http://developer.android.com/reference/android/view/MotionEvent.html) to any other listening entities in the input dispatch pipeline.

| Nested Classes | | |
| --- | --- | --- |
| interface | [GestureDetector.BaseListener](GestureDetector.BaseListener) | Receives detection results. |
| interface | [GestureDetector.FingerListener](GestureDetector.FingerListener) | This listener reports when the detected finger count changes on the touchpad. |
| interface | [GestureDetector.OneFingerScrollListener](GestureDetector.OneFingerScrollListener) | This listener receives continuous one finger horizontal scrolling events. |
| interface | [GestureDetector.ScrollListener](GestureDetector.ScrollListener) | This listener receives continuous horizontal scrolling events independent of the finger count. |
| interface | [GestureDetector.TwoFingerScrollListener](GestureDetector.TwoFingerScrollListener) | This listener receives continuous two finger horizontal scrolling events. |

| Public Constructors | |
| --- | --- |
| [GestureDetector](#GestureDetector(android.content.Context))([Context](https://developer.android.com/reference/android/content/Context.html) context) | |

| Public Methods | |
| --- | --- |
| static boolean | [isForward](#isForward(com.google.android.glass.touchpad.Gesture))([Gesture](Gesture) gesture) |
| static boolean | [isForward](#isForward(com.google.android.glass.touchpad.Gesture))(float deltaX) |
| boolean | [onMotionEvent](#onMotionEvent(android.view.MotionEvent))([MotionEvent](https://developer.android.com/reference/android/view/MotionEvent.html) event) |
| [GestureDetector](GestureDetector) | [setAlwaysConsumeEvents](#setAlwaysConsumeEvents(boolean))(boolean enabled) |
| [GestureDetector](GestureDetector) | [setBaseListener](#setBaseListener(com.google.android.glass.touchpad.GestureDetector.BaseListener))([GestureDetector.BaseListener](GestureDetector.BaseListener) listener) |
| [GestureDetector](GestureDetector) | [setFingerListener](#setFingerListener(com.google.android.glass.touchpad.GestureDetector.FingerListener))([GestureDetector.FingerListener](GestureDetector.FingerListener) listener) |
| [GestureDetector](GestureDetector) | [setOneFingerScrollListener](#setOneScrollFingerListener(com.google.android.glass.touchpad.GestureDetector.OneFingerScrollListener))([GestureDetector.OneFingerScrollListener](GestureDetector.OneFingerScrollListener) listener) |
| [GestureDetector](GestureDetector) | [setScrollListener](#setScrollListener(com.google.android.glass.touchpad.GestureDetector.ScrollListener))([GestureDetector.ScrollListener](GestureDetector.ScrollListener) listener) |
| [GestureDetector](GestureDetector) | [setTwoFingerScrollListener](#setTwoFingerScrollListener(com.google.android.glass.touchpad.GestureDetector.TwoFingerScrollListener))([GestureDetector.TwoFingerScrollListener](GestureDetector.TwoFingerScrollListener) listener) 

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

## Public Constructors

Added in API level XE12

#### public **GestureDetector** ([Context](https://developer.android.com/reference/android/content/Context.html) context) 

## Public Methods

Added in API level XE16

#### public static boolean **isForward** ([Gesture](Gesture) gesture) 

Returns `true` if the given gesture corresponds to forward motion on the touchpad.

This method only makes sense for lateral swipes and throws an exception if called on other gestures.

Added in API level XE16

#### public static boolean **isForward** (float deltaX) 

Returns `true` if the given displacement corresponds to forward motion on the touchpad.

Added in API level XE12

#### public boolean **onMotionEvent** ([MotionEvent](https://developer.android.com/reference/android/view/MotionEvent.html) event) 

Processes a motion event, returning `true` if events should always be consumed or if a gesture was detected.

##### Returns

-   reflects whether touch event is consumed

Added in API level XE12

#### public [GestureDetector](GestureDetector) **setAlwaysConsumeEvents** (boolean enabled) 

Sets if the gesture detector should consume events passed to `[onMotionEvent(MotionEvent)](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/touchpad/GestureDetector#onMotionEvent(android.view.MotionEvent))`, regardless of whether they were actually handled.

Added in API level XE12

#### public [GestureDetector](GestureDetector) **setBaseListener** ([GestureDetector.BaseListener](GestureDetector.BaseListener) listener) 

Sets the basic gesture listener.

Added in API level XE12

#### public [GestureDetector](GestureDetector) **setFingerListener** ([GestureDetector.FingerListener](GestureDetector.FingerListener) listener) 

Sets the finger listener.

Added in API level XE21

#### public [GestureDetector](GestureDetector) **setOneFingerScrollListener** ([GestureDetector.OneFingerScrollListener](GestureDetector.OneFingerScrollListener) listener) 

Sets the listener that detects horizontal and one finger scrolling.

Added in API level XE12

#### public [GestureDetector](GestureDetector) **setScrollListener** ([GestureDetector.ScrollListener](GestureDetector.ScrollListener) listener) 

Sets the listener that detects horizontal scrolling independent of the finger count.

Added in API level XE12

#### public [GestureDetector](GestureDetector) **setTwoFingerScrollListener** ([GestureDetector.TwoFingerScrollListener](GestureDetector.TwoFingerScrollListener) listener) 

Sets the listener that detects horizontal and two finger scrolling.

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
