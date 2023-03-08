# GestureDetector.OneFingerScrollListener

Added in API level XE21

This listener receives continuous one finger horizontal scrolling events.

Note that this listener will not report scrolling events if there has been two or more fingers on the touch pad after the initial down event.

| Public Method | |
| --- | --- |
| abstract boolean | [onOneFingerScroll](#onOneFingerScroll)(float displacement, float delta, float velocity) |


## Public Methods

Added in API level XE21

#### public abstract boolean **onOneFingerScroll** (float displacement, float delta, float velocity) 

Called while the user is scrolling after initial horizontal scroll.

| Parameters | |
| --- | --- |
| displacement | distance between scroll state entering x value |
| delta | delta between two consecutive x motion events |
| velocity | velocity of current x motion event |

##### Returns
- `true` if the events were handled

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
