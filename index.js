import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "Hello World!" });

console.log(title);

title.render();

title.tag = "h3";

title.build().render();

const form = new Form("body");

const label = new Label("Name", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "name" });

form.render();
label.render();
form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Birth Date:", form, { htmlFor: "birthDayInput" }),
  new Input(form, { id: "birthDayInput", name: "birtday", type: "date" })
);
