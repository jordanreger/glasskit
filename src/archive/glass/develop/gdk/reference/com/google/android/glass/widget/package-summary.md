# com.google.android.glass.widget

Added in API level XE12

Contains classes for Glass-themed UI widgets.

### Interfaces

---

[Slider.Determinate](Slider.Determinate) - A determinate slider that tracks a position from left to right. 

---

[Slider.GracePeriod](Slider.GracePeriod) - A slider that animates from left to right during the given grace period in timeInMs and then dismisses itself after running the appropriate callback. 

---

[Slider.GracePeriod.Listener](Slider.GracePeriod.Listener) - Listener call-backs. 

---

[Slider.Indeterminate](Slider.Indeterminate) - An indeterminate slider that animates continuously to indicate ongoing but otherwise unknown progress. 

---

[Slider.Scroller](Slider.Scroller) - A scroll slider that indicates the current position within a fixed-size collection. 

---

### Classes

---

[CardBuilder](CardBuilder) - The [`CardBuilder`](CardBuilder) class helps with building Glass-themed cards with various layouts. 

---

[CardScrollAdapter](CardScrollAdapter) - A special form of a [`BaseAdapter`](http://developer.android.com/reference/android/widget/BaseAdapter.html). 

---

[CardScrollView](CardScrollView) - A [`View`](http://developer.android.com/reference/android/view/View.html) that shows horizontally scrolling children views, referred to as cards. 

---

[Slider](Slider) - A [`Slider`](Slider) from which slider appearances can be drawn: [`Slider.Scroller`](Slider.Scroller), [`Slider.Determinate`](Slider.Determinate), [`Slider.Indeterminate`](Slider.Indeterminate), and [`Slider.GracePeriod`](Slider.GracePeriod). 

---

### Enums

---

[CardBuilder.Layout](CardBuilder.Layout) - Defines the visual layouts for cards. 

---

[CardScrollView.Animation](CardScrollView.Animation) - Defines animation type used to navigate to, insert, or delete a card.

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
