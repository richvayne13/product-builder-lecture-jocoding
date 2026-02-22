# Blueprint: Pomodoro Timer

## Overview

A modern, web-based Pomodoro timer designed to help users manage their work and break intervals. The timer is visually represented as a circular progress bar with tick marks for each minute. Users can customize the timer color, switch between different timer modes (Pomodoro, Short Break, Long Break), toggle between dark and light themes, and receive an audible alarm when a session ends.

## Project Outline

### Design and Style
- **Layout:** A clean, centered, and modern layout featuring the circular timer as the main focus.
- **Color Palette:** 
    - **Primary Color:** Customizable via a color picker (default: tomato red).
    - **Themes:** Supports both **Light** and **Dark** modes with modern, high-contrast colors and subtle shadows.
- **Typography:** Expressive, expressive and relevant typography with stressed font sizes for ease of understanding.
- **Visuals:**
    - A circular timer with a progress bar that animates as time elapses.
    - 60 tick marks around the circle to visually represent minutes.
    - Polished UI with smooth transitions and depth-enhancing shadows.
- **Responsiveness:** Fully mobile-responsive layout that adapts to different screen sizes.

### Features
- **Timer Modes:**
    - Pomodoro: 25 minutes.
    - Short Break: 5 minutes.
    - Long Break: 15 minutes.
- **Controls:**
    - Start: Begins the countdown.
    - Pause: Pauses the countdown.
    - Reset: Resets the timer to the current mode's default time.
- **Customization:**
    - **Primary Color Picker:** Dynamically change the timer's theme color.
    - **Theme Toggle:** Switch between Light and Dark modes with persistent storage in `localStorage`.
- **Alarm:**
    - An audible alarm sounds when the timer reaches zero.

## Current State

- **Implemented:** 
    - Core Pomodoro logic and circular timer visualization.
    - Mode switching (Pomodoro, Short Break, Long Break).
    - Primary color customization via color picker.
    - **Dark/Light Mode** support with persistence.
    - Modern, responsive styling.
    - Audio alert on timer completion.

## Next Steps

- Add a task list to track what to work on during Pomodoro sessions.
- Implement custom duration settings for each mode.
- Add keyboard shortcuts for timer controls.
