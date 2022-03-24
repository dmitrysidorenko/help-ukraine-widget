import cssText from 'bundle-text:./styles/styles.scss';
import { getConfig, WidgetConfig } from './config';
import {createWidget} from './render';
import {sliderBehavior} from "./slider";


if (document.readyState !== "loading") {
    setTimeout(initialize);
} else {
    document.addEventListener("DOMContentLoaded", initialize);
}

function initialize() {
    injectStyles();
    const config = getConfig();
    initWidget(config);
}

function injectStyles() {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(cssText));
}


function initWidget(config: WidgetConfig) {
    document.body.append(createWidget(config.widgetType, config.widgetPosition, 'main'));

		sliderBehavior();
}

