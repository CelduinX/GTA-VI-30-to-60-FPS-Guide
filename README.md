<h1 align="center">🎮 FrameHeist</h1>

<p align="center">
  <strong>A smoother picture for your console games</strong><br>
  GTA VI · PS5 · Xbox Series X|S
</p>

<p align="center">
  🌐 <strong>English</strong> &nbsp; | &nbsp; <a href="README.de.md"><strong>🇩🇪 Deutsche Anleitung</strong></a>
</p>

---

Want smoother-looking gameplay on your PS5 or Xbox? With a **capture card**, your **PC** and **Lossless Scaling**, you can add extra frames to your console's picture. The aim: **from 30 FPS to a smoother 60 FPS or more.**

GTA VI is the focus of this project, but the same idea can also be used with other console games.

## ✨ The idea in a nutshell

A capture card brings the console's picture to your PC. The free app **vicash** displays it, and **Lossless Scaling** adds intermediate frames to make movement look smoother. This is called *frame generation*.

You play on the monitor connected to your PC. Your controller stays connected to the console.

> **Good to know:** The picture looks smoother, but the console itself does not run faster. Some extra delay or picture errors can occur.

## 🎥 See the result

This short side-by-side demo shows what the method looks like in practice: **Assassin’s Creed Mirage on PS5 at the original 30 FPS compared with a 60 FPS output created by Lossless Scaling.**

<p align="center">
  <a href="https://www.youtube.com/watch?v=ntizJL75VQM">
    <img src="https://img.youtube.com/vi/ntizJL75VQM/maxresdefault.jpg" alt="PS5 30 FPS versus 60 FPS Lossless Scaling demo with Assassin’s Creed Mirage" width="720">
  </a>
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=ntizJL75VQM"><strong>▶️ Watch the 30 FPS vs. 60 FPS demo on YouTube</strong></a>
</p>

The video focuses on the visible result of frame generation.

## 🧰 What you need

### Hardware

- **Console:** PS5 or Xbox Series X|S
- **Capture card:** HDMI model with matching HDMI and USB cables
- **PC:** Windows, with a suitable graphics card
- **Monitor:** connected to the PC, with at least 60 Hz

[Recommended graphics cards](https://store.steampowered.com/app/993090/Lossless_Scaling/): NVIDIA RTX 30 series, AMD RX 6000 series or Intel Arc.

### Software

| App | What it does | Where to get it |
| --- | --- | --- |
| **vicash** | Displays the console picture on your PC | [Free download](https://github.com/caaatto/vicash/releases) |
| **Lossless Scaling** | Adds frames for smoother movement | [Buy on Steam](https://store.steampowered.com/app/993090/Lossless_Scaling/) |

## 🛒 Choosing a capture card

These three UGREEN models are options to compare:

| UGREEN model | Capture on PC | PC connection | HDMI passthrough | Guide price* | Shop |
| --- | --- | --- | --- | ---: | --- |
| [15389](https://www.amazon.com/dp/B0DT9DY312) | 1080p / 60 FPS<br>2K / 30 FPS | USB-A / USB-C<br>USB 3.0 | — | ≈ €16 | [Amazon.de](https://www.amazon.de/dp/B0DT9DY312) |
| [25773](https://www.amazon.com/dp/B0DGXJS6BF) | 1080p / 60 FPS<br>2K / 30 FPS | USB-A / USB-C<br>USB 3.0 | 4K / 30 Hz | ≈ €22 | [Amazon.de](https://www.amazon.de/dp/B0DGXJS6BF) |
| [25173](https://www.amazon.com/dp/B0D4LV836Z) | 4K / 60 FPS<br>2K / 144 FPS<br>1080p / 240 FPS | USB-A / USB-C<br>USB 3.0 | 4K / 60 Hz | ≈ €72 | [Amazon.de](https://www.amazon.de/dp/B0D4LV836Z) |

*Prices are estimates from the original product shortlist, not live offers. Check Amazon.de for current prices. Model names link to the product specifications; capture modes are manufacturer ratings.*

> **Buying tip:** “Capture on PC” is the key column for this guide. HDMI passthrough sends the original console picture to a separate TV or monitor, without the extra frames from Lossless Scaling.

## 🖥️ Configure vicash

Open the settings with **F1** and use the following values:

| Section | Setting | Value |
| --- | --- | --- |
| 🖥️ **Display** | Display mode | **Immediate** — no V-Sync and the lowest latency |
| 📷 **Capture** | Device | **UGREEN Capture Card** |
| | Resolution | **1920 × 1080** or **2560 × 1440** — choose the highest resolution supported by your PC monitor |
| | FPS | **30** |
| 🔊 **Audio** | Input | **UGREEN Capture Card** |
| | Output | Your PC speakers or headphones |
| | Volume | Increase it if the PS5 is too quiet |
| | Sync delay | **100 ms** (default) |

### Useful hotkeys

| Key | Action |
| --- | --- |
| **F1** | Open settings |
| **F11** | Toggle fullscreen |
| **Esc** | Exit fullscreen |

## 🚀 Configure Lossless Scaling

### 1. Create a profile for vicash

Create a new profile called **vicash** and select **vicash.exe** as the application. Leave automatic scaling turned off.

<p align="center">
  <img src="assets/screenshots/ls_step1.png" alt="Creating a vicash profile in Lossless Scaling" width="645">
</p>

### 2. Apply the recommended settings

#### Frame Generation

| Setting | Value |
| --- | --- |
| Type | **LSFG 3.1** |
| Mode | **Fixed** |
| Multiplier | **2** |
| Flow scale | See the resolution table below |
| Performance | **Off** |

Use the Flow scale value that matches the resolution selected in vicash:

| Resolution | Flow scale |
| --- | ---: |
| **1920 × 1080** (Full HD) | **100** |
| **2560 × 1440** (2K) | **75–100** |
| **3840 × 2160** (4K) | **50–67** |

#### Scaling and Capture

| Section | Setting | Value |
| --- | --- | --- |
| **Scaling** | Type | **Off** |
| **Capture** | Capture API | **DXGI** |
| | Queue target | **0** |

#### Rendering

| Setting | Value |
| --- | --- |
| Sync mode | **Default** |
| Max frame latency | **3** |
| HDR support | **Off** |
| G-Sync support | **On** if your monitor supports G-Sync or FreeSync |
| Draw FPS | **On or Off** — optionally displays the original and generated FPS |

<p align="center">
  <img src="assets/screenshots/ls_step2.png" alt="Recommended Lossless Scaling settings for the vicash profile" width="900">
</p>
