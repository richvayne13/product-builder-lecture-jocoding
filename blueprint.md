# Blueprint: Pomodoro Timer

## Overview

A modern, web-based Pomodoro timer designed to help users manage their work and break intervals. The timer features a circular progress bar fixed to a 60-minute scale, allowing users to select custom durations in 5-minute increments.

## Project Outline

### Design and Style
- **Layout:** A clean, centered, and modern layout featuring the circular timer as the main focus.
- **Color Palette:** 
    - **Primary Color:** Customizable via a color picker (default: tomato red).
    - **Themes:** Supports both **Light** and **Dark** modes with modern, high-contrast colors.
- **Visuals:**
    - A circular timer with 60 tick marks, representing a full hour.
    - The progress bar fills based on the selected duration relative to 60 minutes.
    - As time elapses, the progress bar "depletes" until it disappears at 0.
- **Responsiveness:** Fully mobile-responsive layout.

### Features
- **Timer Modes:** Quick presets for Pomodoro (25m), Short Break (5m), and Long Break (15m).
- **Custom Duration:** A range slider to set time from 5 to 60 minutes in 5-minute steps.
- **Fixed 60-Min Scale:** The circle always represents 60 minutes, so setting 30 minutes fills exactly half the circle.
- **Controls:** Start, Pause, and Reset functionality.
- **Customization:** Theme toggle and primary color customization.
- **Affiliate Inquiry Form:** A contact form powered by Formspree for partnership requests.
- **Comments Section:** Integrated Disqus comments for user interaction.
- **Alarm:** Audible alert when the timer ends.

## Current State

- **Implemented:** 
    - Core countdown logic and 60-tick SVG visualization.
    - Fixed 60-minute circular scale.
    - Duration slider (5-60m, 5m steps).
    - Depleting progress bar animation.
    - Dark/Light Mode with persistence.
    - Affiliate Inquiry Form integration (Formspree).
    - **Disqus comments integration.**
    - Responsive styling and audio alerts.

## Next Steps

- Add a task list to track what to work on during sessions.
- Add keyboard shortcuts.
