### How To Declare an Event Listener

Thank you for visiting this brief tutorial. We will cover how to initiate an event and begin to listen more!

<h4>Preparation </h4> You will need a working development environment with a text editor like Atom or Sublime. You will need to build a directory containing an html index file and CSS style sheet. You will also link a JavaScript file to your index file.

An event is described as any recorded action a user takes when landing on your webpage. jQuery makes it easier to set up event-driven responses on page elements. In some cases the user will trigger the event and in other cases it will be triggered by the browser.


<h4>Initiation </h4> At this time you choose which event you would like to track and initiate the first event on the load of the page.

"There are many ways to listen for events. Actions are constantly occurring on a webpage, but the developer is only notified about them if they're listening for them. Listening for an event basically means you're waiting for the browser to tell you that a specific event has occurred and then you'll specify how the page should react.

To specify to the browser what to do when an event occurs, you provide a function, also known as an event handler. This function is executed whenever the event occurs (or until the event is unbound)."

https://learn.jquery.com/events/introduction-to-events/

<h4> Visualization </h4>  Insert Photo Tags here. Screenshot of Event Listener Code. Big ear hearing the music note.

<img src="https:

<img src="https:


<h4> Example Code </h4>

You can use this code to create a new event on page load.

```

// Logging an event's information
$( "form" ).ready( "submit", function( ) {

}

```
Prevent page default on page load

```  

//

$(document).on(function( event ) {
    // Prevent the form's default submission.//

    event.preventDefault();

    // Log the event object//

    console.log( event );

});
```

Modify the code to this to create a new event on Click

```
$( "input" ).on(
    "click",   
    function() {
        console.log( "An input was clicked" );
    }
);
```

You can use this code to create Multiple Events on the same handler.

```
$( "input" ).on(
    "click change",   // Bind handlers for multiple events. Separate with a space //
    function() {
        console.log( "An input was clicked or changed!" );
    }
);
```





<h4> Listen </4>

Monitor your results and data to derive meaning. Asses strengths in performance and areas for improvement or easier use.

<h4> Links </h4>

Credit to the jQuery Learning Center

href src="https://learn.jquery.com/events/event-basics/" "
