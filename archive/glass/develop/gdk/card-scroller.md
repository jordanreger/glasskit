# Card Scroller

With Glass, you can build rich interactions with your cards such as scrolling and animations.

## Scrolling cards in activities

The Glass display and touchpad are great for displaying swipable cards, like in the Glass timeline. If you're building an activity, you can create the same type of effect with the [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] widget.

1.  Implement a [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK] to supply cards to the [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK]. You can build a standard view hierarchy yourself or use the [`CardBuilder`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder) [**TODO**: ADD LINK] class.
2.  Create a [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] that uses the [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK] as the supplier for cards.
3.  Set your activity's content view to be the [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] or display the [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] in a layout.

Here's a simple implementation that scrolls through three cards:

```java
public class CardScrollActivity extends Activity {

    private List<CardBuilder> mCards;
    private CardScrollView mCardScrollView;
    private ExampleCardScrollAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        createCards();

        mCardScrollView = new CardScrollView(this);
        mAdapter = new ExampleCardScrollAdapter();
        mCardScrollView.setAdapter(mAdapter);
        mCardScrollView.activate();
        setContentView(mCardScrollView);
    }

    private void createCards() {
        mCards = new ArrayList<CardBuilder>();

        mCards.add(new CardBuilder(this, CardBuilder.Layout.TEXT)
                .setText("This card has a footer.")
                .setFootnote("I'm the footer!"));

        mCards.add(new CardBuilder(this, CardBuilder.Layout.CAPTION)
                .setText("This card has a puppy background image.")
                .setFootnote("How can you resist?")
                .addImage(R.drawable.puppy_bg));

        mCards.add(new CardBuilder(this, CardBuilder.Layout.COLUMNS)
                .setText("This card has a mosaic of puppies.")
                .setFootnote("Aren't they precious?")
                .addImage(R.drawable.puppy_small_1);
                .addImage(R.drawable.puppy_small_2);
                .addImage(R.drawable.puppy_small_3));
    }

    private class ExampleCardScrollAdapter extends CardScrollAdapter {

        @Override
        public int getPosition(Object item) {
            return mCards.indexOf(item);
        }

        @Override
        public int getCount() {
            return mCards.size();
        }

        @Override
        public Object getItem(int position) {
            return mCards.get(position);
        }

        @Override
        public int getViewTypeCount() {
            return CardBuilder.getViewTypeCount();
        }

        @Override
        public int getItemViewType(int position){
            return mCards.get(position).getItemViewType();
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            return mCards.get(position).getView(convertView, parent);
        }
    }
}
```

### Interacting with scrolling cards

Since [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] extends [`AdapterView`](https://developer.android.com/reference/android/widget/AdapterView.html) you can implement the standard Android listeners.

1.  Call the inherited [`setOnItemClickListener()`](https://developer.android.com/reference/android/widget/AdapterView.html#setOnItemClickListener(android.widget.AdapterView.OnItemClickListener)) on your `CardScrollView`.
2.  Implement an [`onItemClick()`](https://developer.android.com/reference/android/widget/AdapterView.OnItemClickListener.html#onItemClick(android.widget.AdapterView%3C?%3E,%20android.view.View,%20int,%20long)) handler for the tap event.

Here is an extension to the previous example that plays a tap sound when you tap on a card:

```java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        setupClickListener();
        setContentView(mCardScrollView);
    }

    private void setupClickListener() {
        mCardScrollView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                AudioManager am = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
                am.playSoundEffect(Sounds.TAP);
            }
        });
    }
```

### Animating scrolling cards

There are three animations available for scrolling cards: Navigation, Insertion, and Deletion.

1.  Implement an insert or delete action on a card at a specified position in the card set.
2.  Call [`animate()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView#animate(int,%20com.google.android.glass.widget.CardScrollView.Animation)) [**TODO**: ADD LINK] and use a value from the [`CardScrollView.Animation`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView.Animation) [**TODO**: ADD LINK] enum.
3.  In order to display a smoother animation, remove any references to [`notifyDataSetChanged()`](https://developer.android.com/reference/android/widget/BaseAdapter.html#notifyDataSetChanged()). The [`animate()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView#animate(int,%20com.google.android.glass.widget.CardScrollView.Animation)) [**TODO**: ADD LINK] method handles updating your data set view.

```java
private class ExampleCardScrollAdapter extends CardScrollAdapter {
    ...

    // Inserts a card into the adapter, without notifying.
    public void insertCardWithoutNotification(int position, CardBuilder card) {
        mCards.add(position, card);
    }
}

private void insertNewCard(int position, CardBuilder card) {
    // Insert new card in the adapter, but don't call
    // notifyDataSetChanged() yet. Instead, request proper animation
    // to inserted card from card scroller, which will notify the
    // adapter at the right time during the animation.
    mAdapter.insertCardWithoutNotification(position, card);
    mCardScrollView.animate(position, CardScrollView.Animation.INSERTION);
}
```

### Performance and implementation tips for scrolling cards

Keep in mind the following design and performance implications when creating card scrollers.

#### Card lifecycle

To increase performance, a [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] only loads a subset of the cards that a [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK] provides (generally, the ones that are visible to the user, and a few more). Because of this, a card can be in any of these four general states:

-   **Detached** - The card scroll view does not need this card at the current time. You are notified by the card's [`onDetachedToWindow()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView.html#onAttachedToWindow()) [**TODO**: ADD LINK] method if a card was previously attached and then detached.
-   **Attached** - The card scroll view requests the card from the adapter with `getView()`, because the card is close to being "activated." You are notified by the card's [`onAttachedToWindow()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView.html#onAttachedToWindow()) [**TODO**: ADD LINK] method when this happens.
-   **Activated** - The card is partially visible to the user, but the card scroll view has not "selected" the card to display to the user. The ['isActivated()'](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView#isActivated()) [**TODO**: ADD LINK] method returns `true` in this case.
-   **Selected** - The card is taking up the user's entire screen. Calling [`getSelectedView()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView.html#getSelectedView()) [**TODO**: ADD LINK] returns the currently selected card. The [`isSelected()`](http://developer.android.com/reference/android/view/View.html#isSelected()) method returns true in this case.

If you are animating your card's view or doing other costly operations, start and stop the operations in [`onAttachedToWindow()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView.html#onAttachedToWindow()) [**TODO**: ADD LINK] and [`onDetachedToWindow()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView.html#onAttachedToWindow()) [**TODO**: ADD LINK] to save resources.

#### Card recycling

When a card goes from being attached to detached, the view object associated with the card can be recycled and used by a card that is being attached. Recycling views with updated information is much more efficient than creating new views.

To take advantage of card recycling, implement the [`getItemViewType()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter#getItemViewType(int)), [`getViewTypeCount()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter#getViewTypeCount()) [**TODO**: ADD LINK], and [`getView()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter#getView(int,%20android.view.View,%20android.view.ViewGroup)) [**TODO**: ADD LINK] methods of the [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK] class. You then use some of the convenience methods in the [`CardBuilder`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardBuilder) [**TODO**: ADD LINK] class to implement recycling in your [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK], like in the following example:

```java
private List<CardBuilder> mCards;
...
/**
 * Returns the number of view types for the CardBuilder class. The
 * CardBuilder class has a convenience method that returns this value for
 * you.
 */
@Override
public int getViewTypeCount() {
    return CardBuilder.getViewTypeCount();
}

/**
 * Returns the view type of this card, so the system can figure out
 * if it can be recycled. The CardBuilder.getItemViewType() method
 * returns it's own type.
 */
@Override
public int getItemViewType(int position){
    return mCards.get(position).getItemViewType();
}

/**
 * When requesting a card from the adapter, recycle the view if possible.
 * The CardBuilder.getView() method automatically recycles the convertView
 * it receives, if possible, or creates a new view if convertView is null or
 * of the wrong type.
 */
@Override
public View getView(int position, View convertView, ViewGroup parent) {
    return  mCards.get(position).getView(convertView, parent);
}
```

#### Implementing stable card IDs

When a card is selected and being displayed to users, you might not want changes to the underlying adapter to affect the card that users see at that moment. For example, if a user is viewing a selected card, and a card is removed to the left of that card, the card the user is viewing can potentially shift to the left, because the [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK] reassigns IDs to the underlying data set when changes occur, by default.

If it logically makes sense to assign your cards unique IDs, you can maintain a consistent ID in the underlying data set to prevent the aforementioned problem. To do this, override [`hasStableIds()`](http://developer.android.com/reference/android/widget/BaseAdapter.html#hasStableIds()) and return `true`. This specifies to the system that the [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK] maintains stable IDs across data set changes. In addition, implement [`getItemId()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter#getItemId(int)) [**TODO**: ADD LINK] to return the appropriate unique ID for the cards in your adapter. The default implementation returns the position index of the card in the adapter, which is inherently unstable.

#### Empty CardScrollAdapter

When you have an empty data set for adapters, the default view is to show a black screen. If you want to show a different view in these cases, do not use [`setEmptyView()`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView#setEmptyView(android.view.View)) [**TODO**: ADD LINK]. Instead, create a single card in your [`CardScrollAdapter`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollAdapter) [**TODO**: ADD LINK].

## Horizontal tugging feedback

Many built-in immersions on Glass provide "tugging" feedback when swiping backward and forward don't perform an action. For example, you can see this feedback when swiping after taking a photo.

If your immersion does not use horizontal swipe gestures to perform application-specific functions, provide this tugging effect by wrapping your layout inside a [`CardScrollView`](https://developers.google.com/glass/develop/gdk/reference/com/google/android/glass/widget/CardScrollView) [**TODO**: ADD LINK] that contains one card.

1.  Copy the following helper class into your project:

```java
public class TuggableView extends CardScrollView {

    private final View mContentView;

    /**
     * Initializes a TuggableView that uses the specified layout
     * resource for its user interface.
     */
    public TuggableView(Context context, int layoutResId) {
        this(context, LayoutInflater.from(context)
                .inflate(layoutResId, null));
    }

    /**
     * Initializes a TuggableView that uses the specified view
     * for its user interface.
     */
    public TuggableView(Context context, View view) {
        super(context);

        mContentView = view;
        setAdapter(new SingleCardAdapter());
        activate();
    }

    /**
     * Overridden to return false so that all motion events still
     * bubble up to the activity's onGenericMotionEvent() method after
     * they are handled by the card scroller. This allows the activity
     * to handle TAP gestures using a GestureDetector instead of the
     * card scroller's OnItemClickedListener.
     */
    @Override
    protected boolean dispatchGenericFocusedEvent(MotionEvent event) {
        super.dispatchGenericFocusedEvent(event);
        return false;
    }

    /** Holds the single "card" inside the card scroll view. */
    private class SingleCardAdapter extends CardScrollAdapter {

        @Override
        public int getPosition(Object item) {
            return 0;
        }

        @Override
        public int getCount() {
            return 1;
        }

        @Override
        public Object getItem(int position) {
            return mContentView;
        }

        @Override
        public View getView(int position, View recycleView,
                ViewGroup parent) {
            return mContentView;
        }
    }
}
```

2. Modify the `onCreate` method in your activity to display the `CardScrollView` that contains your layout.

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // was: setContentView(R.layout.main_activity);
    setContentView(new TuggableView(this, R.layout.main_activity));
}
```

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).