<p align="center">
  <img src="assets/logo.png" alt="30-zu-60-FPS-Logo" width="320">
</p>

<h1 align="center">GTA VI 30 to 60 FPS Guide</h1>

<p align="center">
  <strong>30-FPS-Konsolenspiele mit 60 FPS oder mehr flüssiger aussehen lassen</strong><br>
  GTA VI · PS5 · Xbox Series X|S
</p>

<p align="center">
  🌐 <a href="README.md"><strong>🇬🇧 English</strong></a> &nbsp; | &nbsp; <strong>🇩🇪 Deutsch</strong>
</p>

<p align="center">
  <a href="#demo">🎥 Demo</a> &nbsp;•&nbsp;
  <a href="#voraussetzungen">🧰 Das brauchst du</a> &nbsp;•&nbsp;
  <a href="#capture-card">🛒 Capture Card</a> &nbsp;•&nbsp;
  <a href="#vicash">🖥️ vicash</a> &nbsp;•&nbsp;
  <a href="#lossless-scaling">🚀 Lossless Scaling</a>
</p>

---

Diese Anleitung zeigt dir, wie Konsolenspiele mit einer **Capture Card**, einem **Windows-PC**, **vicash** und **Lossless Scaling** flüssiger aussehen können. Im Mittelpunkt steht GTA VI, die Methode funktioniert aber auch mit anderen Konsolenspielen.

Die Capture Card bringt das Konsolenbild auf deinen PC. **vicash** zeigt es an, während **Lossless Scaling** zusätzliche Zwischenbilder erzeugt. Du spielst weiterhin mit dem Controller, der mit deiner Konsole verbunden ist.

> [!NOTE]
> Das Bild wirkt flüssiger, die Konsole selbst wird dadurch aber nicht schneller. Frame Generation kann die Verzögerung leicht erhöhen und gelegentlich Bildfehler verursachen.

<a id="demo"></a>

## 🎥 Sieh dir das Ergebnis an

Diese Side-by-Side-Demo zeigt **Assassin’s Creed Mirage auf der PS5** mit originalen 30 FPS im Vergleich zur 60-FPS-Ausgabe durch Lossless Scaling.

<p align="center">
  <a href="https://www.youtube.com/watch?v=ntizJL75VQM">
    <img src="https://img.youtube.com/vi/ntizJL75VQM/maxresdefault.jpg" alt="PS5-Vergleich zwischen 30 FPS und 60 FPS mit Lossless Scaling und Assassin’s Creed Mirage" width="720">
  </a>
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=ntizJL75VQM"><strong>▶️ 30-FPS-vs.-60-FPS-Demo auf YouTube ansehen</strong></a>
</p>

<a id="voraussetzungen"></a>

## 1️⃣ Das brauchst du

### Hardware

- 🎮 **Konsole:** PS5 oder Xbox Series X|S
- 🔌 **Capture Card:** HDMI-Modell mit passenden HDMI- und USB-Kabeln
- 🖥️ **PC:** Windows, mit geeigneter Grafikkarte
- 📺 **Monitor:** am PC angeschlossen, mit mindestens 60 Hz

[Empfohlene Grafikkarten](https://store.steampowered.com/app/993090/Lossless_Scaling/): NVIDIA RTX 30-Serie, AMD RX 6000-Serie oder Intel Arc.

### Software

| App | Aufgabe | Download |
| --- | --- | --- |
| **vicash** | Zeigt das Konsolenbild auf deinem PC | [Kostenlos herunterladen](https://github.com/caaatto/vicash/releases) |
| **Lossless Scaling** | Erzeugt zusätzliche Bilder für flüssigere Bewegungen | [Auf Steam kaufen](https://store.steampowered.com/app/993090/Lossless_Scaling/) |

<a id="capture-card"></a>

## 2️⃣ Capture Card auswählen

Vergleiche diese drei UGREEN-Modelle und wähle das passende Modell für deine gewünschte Auflösung:

| UGREEN-Modell | Aufnahme am PC | PC-Anschluss | HDMI-Durchschleifausgang | Richtpreis* | Shop |
| --- | --- | --- | --- | ---: | --- |
| [15389](https://www.amazon.com/dp/B0DT9DY312) | 1080p / 60 FPS<br>2K / 30 FPS | USB-A / USB-C<br>USB 3.0 | — | ca. 16 € | [Amazon.de](https://www.amazon.de/dp/B0DT9DY312) |
| [25773](https://www.amazon.com/dp/B0DGXJS6BF) | 1080p / 60 FPS<br>2K / 30 FPS | USB-A / USB-C<br>USB 3.0 | 4K / 30 Hz | ca. 22 € | [Amazon.de](https://www.amazon.de/dp/B0DGXJS6BF) |
| [25173](https://www.amazon.com/dp/B0D4LV836Z) | 4K / 60 FPS<br>2K / 144 FPS<br>1080p / 240 FPS | USB-A / USB-C<br>USB 3.0 | 4K / 60 Hz | ca. 72 € | [Amazon.de](https://www.amazon.de/dp/B0D4LV836Z) |

> [!TIP]
> Für diese Anleitung ist **Aufnahme am PC** die wichtigste Spalte. Der HDMI-Durchschleifausgang gibt nur das ursprüngliche Konsolenbild an einen zusätzlichen Bildschirm weiter — ohne die Zwischenbilder von Lossless Scaling.

<sub>*Die Preise dienen als Orientierung aus der ursprünglichen Produktauswahl und sind keine Tagesangebote. Die Aufnahmemodi sind Herstellerangaben. Aktuelle Preise findest du auf Amazon.de.</sub>

<a id="vicash"></a>

## 3️⃣ vicash einstellen

Öffne die Einstellungen mit **F1** und übernimm die folgenden Werte von oben nach unten.

### 🖥️ Anzeige

- **Modus:** `Immediate` — ohne V-Sync und mit niedrigster Latenz

### 📷 Capture

- **Gerät:** `UGREEN Capture Card`
- **Auflösung:** `1920 × 1080` oder `2560 × 1440` — nutze die höchste Auflösung, die dein PC-Monitor unterstützt
- **FPS:** `30`

### 🔊 Audio

- **Eingang:** `UGREEN Capture Card`
- **Ausgang:** Lautsprecher oder Kopfhörer am PC
- **Lautstärke:** erhöhen, falls die PS5 zu leise ist
- **Sync-Verzögerung:** `100 ms` (Standard)

<details>
<summary><strong>⌨️ Nützliche vicash-Hotkeys</strong></summary>

| Taste | Funktion |
| --- | --- |
| **F1** | Einstellungen öffnen |
| **F11** | Vollbild umschalten |
| **Esc** | Vollbild beenden |

</details>

<a id="lossless-scaling"></a>

## 4️⃣ Lossless Scaling einstellen

### Schritt 1 — vicash-Profil erstellen

Erstelle ein neues Profil mit dem Namen **vicash**, wähle **vicash.exe** als Anwendung aus und lass die automatische Skalierung ausgeschaltet.

<p align="center">
  <img src="assets/screenshots/ls_step1.png" alt="Erstellung eines vicash-Profils in Lossless Scaling" width="645"><br>
  <sub>Profilname und Anwendungsfilter für vicash</sub>
</p>

### Schritt 2 — Einstellungen übernehmen

> [!IMPORTANT]
> Stelle den **Multiplier auf 2**, um aus einer Eingabe mit 30 FPS eine flüssigere Ausgabe mit 60 FPS zu erzeugen.

#### 🎞️ Frame Generation

- **Type:** `LSFG 3.1`
- **Mode:** `Fixed`
- **Multiplier:** `2`
- **Performance:** `Off`
- **Flow scale:** passenden Wert unten auswählen

| Full HD · 1920 × 1080 | 2K · 2560 × 1440 | 4K · 3840 × 2160 |
| :---: | :---: | :---: |
| **100** | **75–100** | **50–67** |

#### 🔲 Scaling

- **Type:** `Off`

#### 📥 Capture

- **Capture API:** `DXGI`
- **Queue target:** `0`

#### 🎨 Rendering

- **Sync mode:** `Default`
- **Max frame latency:** `3`
- **HDR support:** `Off`
- **G-Sync support:** `On`, wenn dein Monitor G-Sync oder FreeSync unterstützt
- **Draw FPS:** `On` oder `Off` — einschalten, um echte und künstlich erzeugte FPS anzuzeigen

<p align="center">
  <img src="assets/screenshots/ls_step2.png" alt="Empfohlene Lossless-Scaling-Einstellungen für das vicash-Profil" width="900"><br>
  <sub>Empfohlene Lossless-Scaling-Einstellungen für das vicash-Profil</sub>
</p>
