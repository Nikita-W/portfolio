// JS Typewriter Animation Tutorial from Tom Is Loading:
// https://www.youtube.com/watch?v=R846J8LJ6os
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
  "a designer.",
  "a problem solver.",
  "a researcher.",
  "an organizer.",
  "an artist.",
  "a storyteller.",
];
const el = document.getElementById("typeEffect");
let sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

// end Typewriter Animation
//////////////////////////////////////////////////////////

// Works Section Switch Displayed Item Animation

$(".workListItem").on("click", function () {
  console.log("A list item was clicked.");

  //for passing to functions several levels deep
  var selected = this;

  if ($(selected).hasClass("active")) {
    // do nothing if item is already selected
    console.log("This item is already active!");
  } else {
    // send wrapper off-screen
    $(".workDisplayWrapper").delay(50).animate({ left: "5000px" }, "slow");

    // switch which display item is active
    function switchDisplay(selected) {
      $(".workListItem").removeClass("active");
      $(".workDisplayItem").removeClass("active");

      if ($(selected).hasClass("work1")) {
        $(".work1").addClass("active");
        console.log("Work 1 is now active");
      } else if ($(selected).hasClass("work2")) {
        $(".work2").addClass("active");
        console.log("Work 2 is now active");
      } else if ($(selected).hasClass("work3")) {
        $(".work3").addClass("active");
        console.log("Work 3 is now active");
      } else if ($(selected).hasClass("work4")) {
        $(".work4").addClass("active");
        console.log("Work 4 is now active");
      }
    }

    setTimeout(function () {
      switchDisplay(selected);
    }, 1000);

    // return wrapper to original position
    $(".workDisplayWrapper").delay(50).animate({ left: "0px" }, "slow");
  }
});

// troubleshooting: exact copy from pen
// $(".workListItem").on("click", function () {
//   console.log("an item was clicked");

//   var selected = this;

//   if ($(selected).hasClass("active")) {
//     console.log("this item is already active!");
//   } else {
//     $(".workDisplayWrapper").delay(50).animate({ left: "5000px" }, "slow");

//     function switchDisplay(selected) {
//       $(".workListItem").removeClass("active");
//       $(".workDisplayItem").removeClass("active");

//       if ($(selected).hasClass("work1")) {
//         $(".work1").addClass("active");
//         console.log("work1 is now active");
//       } else if ($(selected).hasClass("work2")) {
//         $(".work2").addClass("active");
//         console.log("work2 is now active");
//       } else if ($(selected).hasClass("work3")) {
//         $(".work3").addClass("active");
//         console.log("work3 is now active");
//       } else if ($(selected).hasClass("work4")) {
//         $(".work4").addClass("active");
//         console.log("work4 is now active");
//       }
//     }

//     setTimeout(function () {
//       switchDisplay(selected);
//     }, 1000);

//     $(".workDisplayWrapper").animate({ left: "0px" }, "slow");
//   }
// });
