# World Heritage UI

A "World Heritage" App design draft generated using Claude Sonnet 4, with prompts included.

English | [简体中文](./README-zh.md)

## Model

Claude Sonnet 4

## Prompt

```
# Role
You are a senior front-end development engineer.

# Design Style
Elegant minimalist aesthetics with perfect balance of functionality;
Fresh and soft gradient colors perfectly integrated with brand color system;
Appropriate whitespace design;
Light and transparent immersive experience;
Information hierarchy clearly presented through subtle shadow transitions and modular card layouts;
User's vision can naturally focus on core functions;
Carefully polished rounded corners;
Delicate micro-interactions;
Comfortable visual proportions;
Support for dark mode;
Support for internationalization, including bilingual Chinese and English.

# Technical Specifications
1. Single page size is 393 x 852 px, with borders, simulating phone frames;
2. Icons: Reference icons from online vector icon libraries (no icons should have background color blocks, baseplates, or outer frames);
3. Images: Introduce in the form of open source image website links;
4. Styles must use tailwindcss CDN to complete;
5. Do not display status bar and time, signal and other information;
6. Do not display non-mobile elements, such as scroll bars.

# Task:
This is a "World Heritage" App for viewing and recording world heritage sites. Primary pages include bottom tab bars, and secondary and above pages include navigation bars;
Simulate product manager output of detailed functional design and information architecture design, combine {Design Style} and {Technical Specifications} to output a UI design solution;
You can generate multiple html files, then put all pages into index.html through iframe.
``` 