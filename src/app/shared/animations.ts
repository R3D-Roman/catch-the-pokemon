import {
  transition,
  style,
  animate,
  trigger,
  useAnimation,
  keyframes,
} from "@angular/animations";
import { fadeOut, slideInDown } from "ng-animate";

export const listAnimation = trigger("listAnimation", [
  transition(":enter", [
    style({
      height: "1px",
      opacity: 0,
    }),
    animate("250ms ease-out"),
  ]),
  transition(":leave", [
    style({
      opacity: 0,
    }),
    animate(
      "400ms ease-out",
      style({
        opacity: 0,
        height: "1px",
      })
    ),
  ]),
]);

export const bounceModal = trigger("bounceModal", [
  transition(":enter", [
    animate(
      "1000ms ease-in",
      keyframes([
        style({
          transform: "translate( -50%, -500px)",
          opacity: 0,
          offset: 0,
        }),
        style({
          transform: "translate(-50%, 0)",
          opacity: 1,
          offset: 0.4,
        }),
        style({
          transform: "translate( -50%, -65px)",
          offset: 0.5,
        }),
        style({
          transform: "translate(-50%, 0)",
          offset: 0.7,
        }),
        style({
          transform: "translate(-50%, -28px)",
          offset: 0.8,
        }),
        style({
          transform: "translate(-50%, 0)",
          offset: 0.9,
        }),
        style({
          transform: "translate(-50%, -8px)",
          offset: 0.95,
        }),
        style({
          transform: "translate(-50%, 0)",
          offset: 1,
        }),
      ])
    ),
  ]),
]);

export const OffOnLineAnime = trigger("OffOnLineAnime", [
  transition(
    ":enter",
    useAnimation(slideInDown, {
      params: {
        timing: 0.8,
      },
    })
  ),
]);

export const OffOnLineAnimeHide = trigger("OffOnLineAnimeHide", [
  transition(
    ":leave",
    useAnimation(fadeOut, {
      params: {
        delay: 1.8,
        timing: 0.7,
      },
    })
  ),
]);
