import alfy from 'alfy'
import { removeMaj } from "./helpers.js";
// alfy.log('input:', alfy.input);
alfy.output([
	{
    uid: "css-in-js-to-css",
    title: "From CSS-in-JS to regular CSS",
    subtitle: "Transform CSSinJS to regular CSS",
    autocomplete: "From CSS-in-JS to regular CSS",
    text: {
      "copy": removeMaj(alfy.input),
      "largetype": removeMaj(alfy.input)
    }
	},
]);
