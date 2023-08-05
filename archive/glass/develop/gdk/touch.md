# Touch Gestures

Accessing raw data from the Glass touchpad is possible with the Android SDK.

However, the GDK provides a gesture detector that automatically detects common gestures on Glass, including tapping, swiping, and scrolling.

In addition, simple gestures are translated into D-pad events by default for easy processing without using a gesture detector.

## Detecting gestures as D-pad key events

By default, the Glass system translates simple gestures into D-pad key events. This lets you listen for [`onKeyDown()`](http://developer.android.com/reference/android/view/KeyEvent.Callback.html#onKeyDown(int,%20android.view.KeyEvent)) and [`onKeyUp()`](http://developer.android.com/reference/android/view/KeyEvent.Callback.html#onKeyUp(int,%20android.view.KeyEvent)) events on activities or views to process the following gestures as D-pad keys:

-   Tap translates to [`KEYCODE_DPAD_CENTER`](http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_DPAD_CENTER).
-   A camera button press translates to [`KEYCODE_CAMERA`](http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_CAMERA).
-   Swipe down translates to [`KEYCODE_BACK`](http://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_BACK).

The following snippet detects when users tap down on the touchpad:

```java
public class MyActivity extends Activity {
    ...
    @Override
    public boolean onKeyDown(int keycode, KeyEvent event) {
        if (keycode == KeyEvent.KEYCODE_DPAD_CENTER) {
            // user tapped touchpad, do something
            return true;
        }
        ...
        return super.onKeyDown(keycode, event);
    }
}
```

A method to detect taps on individual views is to implement [`OnClickListener`](http://developer.android.com/reference/android/view/View.OnClickListener.html) for the view. When users tap the touchpad (translated as a D-pad center button click) with the view in focus, the view can handle the event with an [`OnClickListener`](http://developer.android.com/reference/android/view/View.OnClickListener.html).

```java
public final class MyActivity extends Activity implements OnClickListener {

    View cardView;

    @Override
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        cardView = new Card(this).setText("Tap to carry out an action").getView();
        // To receive touch events from the touchpad, the view should be focusable.
        cardView.setOnClickListener(this);
        cardView.setFocusable(true);
        cardView.setFocusableInTouchMode(true);
        setContentView(cardView);
    }

    @Override
    protected void onResume() {
        // To receive touch events from the touchpad, the view should have focus.
        cardView.requestFocus();
        super.onResume();
    }

    @Override
    public void onClick(View v) {
        // perform desired action
    }
}
```

## Detecting gestures with a gesture detector

Gesture detectors let you detect simple gestures as well as more complex gestures, such as those that use multiple fingers or scrolling. Complex gestures do not have a corresponding D-pad key.

The [GestureDetector](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/touchpad/GestureDetector) [**TODO**: ADD LINK] provides listener interfaces that you can implement to be notified of a [Gesture](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/touchpad/Gesture) [**TODO**: ADD LINK].

### Detecting activity-level gestures

Detecting gestures at the activity level is appropriate when you don't care what part of your UI has focus. For example, if you want to bring up a menu when users tap the touchpad, regardless of what view has focus, you'd handle the [`MotionEvent`](http://developer.android.com/reference/android/view/MotionEvent.html) inside the activity.

The following example:

1.  Creates a [`GestureDetector`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/touchpad/GestureDetector) [**TODO**: ADD LINK] that implements listeners to process recognized gestures.
2.  Overrides the activity's [`onGenericMotionEvent()`](http://developer.android.com/reference/android/app/Activity.html#onGenericMotionEvent(android.view.MotionEvent)) method to pass the motion events to the gesture detector's [`onMotionEvent()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/touchpad/GestureDetector#onMotionEvent(android.view.MotionEvent)) [**TODO**: ADD LINK] method.

When a motion event occurs, the system passes it to the gesture detector. If recognized, the gesture detector notifies the appropriate listener to process the event.

```java
public class MainActivity extends Activity {
    private GestureDetector mGestureDetector;
    // ...
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // ...
        mGestureDetector = createGestureDetector(this);
    }

    private GestureDetector createGestureDetector(Context context) {
    GestureDetector gestureDetector = new GestureDetector(context);
        //Create a base listener for generic gestures
        gestureDetector.setBaseListener( new GestureDetector.BaseListener() {
            @Override
            public boolean onGesture(Gesture gesture) {
                if (gesture == Gesture.TAP) {
                    // do something on tap
                    return true;
                } else if (gesture == Gesture.TWO_TAP) {
                    // do something on two finger tap
                    return true;
                } else if (gesture == Gesture.SWIPE_RIGHT) {
                    // do something on right (forward) swipe
                    return true;
                } else if (gesture == Gesture.SWIPE_LEFT) {
                    // do something on left (backwards) swipe
                    return true;
                }
                return false;
            }
        });
        gestureDetector.setFingerListener(new GestureDetector.FingerListener() {
            @Override
            public void onFingerCountChanged(int previousCount, int currentCount) {
              // do something on finger count changes
            }
        });
        gestureDetector.setScrollListener(new GestureDetector.ScrollListener() {
            @Override
            public boolean onScroll(float displacement, float delta, float velocity) {
                // do something on scrolling
            }
        });
        return gestureDetector;
    }

    /*
     * Send generic motion events to the gesture detector
     */
    @Override
    public boolean onGenericMotionEvent(MotionEvent event) {
        if (mGestureDetector != null) {
            return mGestureDetector.onMotionEvent(event);
        }
        return false;
    }
}
```

### Detecting view-level gestures

Detecting gestures at the view level is appropriate when you want to do different things depending on what view has focus.

The following example:

1.  Creates a custom view that overrides the [`dispatchGenericFocusedEvent()`](http://developer.android.com/reference/android/view/View.html#dispatchGenericFocusedEvent(android.view.MotionEvent)) method. When a motion event occurs, this method passes the motion event to the gesture detector.
2.  Declares the view to be focusable so that it detects events when it has focus.
3.  Creates a [`GestureDetector`](https://developers.google.com/glass/eap/gdk/reference/com/google/android/glass/gesture/touch/GestureDetector) [**TODO**: ADD LINK] that implements listeners to process recognized gestures.

When the gesture detector recognizes a motion while the view is in focus, the gesture detector calls the appropriate listener.

```java
/**
 * TextView that handles touchpad input (currently only TAP).
 */
public class TouchpadHandlingTextView extends TextView
        implements OnAttachStateChangeListener{

    private final GestureDetector mTouchDetector;

    public TouchpadHandlingTextView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mTouchDetector = createGestureDetector(context);
        // must set the view to be focusable
        setFocusable(true);
        setFocusableInTouchMode(true);
    }

    public TouchpadHandlingTextView(Context context) {
        this(context, null);
    }

    @Override
    public void onViewAttachedToWindow(View v) {
        requestFocus();
    }

    @Override
    public void onViewDetachedFromWindow(View v) {
    }

    /**
     * Pass a MotionEvent into the gesture detector
     */
    @Override
    public boolean dispatchGenericFocusedEvent(MotionEvent event) {
        if (isFocused()) {
            return mTouchDetector.onMotionEvent(event);
        }
        return super.dispatchGenericFocusedEvent(event);
    }

    /**
     * Create gesture detector that triggers onClickListener. Implement
     * onClickListener in your Activity and override
     * onClick() to handle the "tap" gesture.
     */
    private GestureDetector createGestureDetector(Context context) {
        GestureDetector gd = new GestureDetector(context);
        gd.setBaseListener(new GestureDetector.BaseListener() {

            @Override
            public boolean onGesture(Gesture gesture) {
                if (gesture == Gesture.TAP) {
                    return performClick();
                }
                return false;
            }
        });
        return gd;
    }
}
```

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
