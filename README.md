# GraphonAdsDemo

Samsung Tizen TV application demonstrating Graphon's AI-powered advertising analysis capabilities.

## Features

- **Interactive Video Analysis Dashboard**: View AI-generated insights about target audience, brand safety, product categories, and more
- **Brand Video Playback**: Select "Visible Brands" to watch featured brand advertisements (Mercedes-Benz)
- **Remote Control Navigation**: Navigate insights with Up/Down arrows, play videos with Enter key
- **Auto-Return**: Brand videos automatically return to main content after playback

## Demo Video

The app analyzes the "Gangnam Style" music video and provides marketing insights including:
- Target Audience Analysis
- Product Category Recommendations
- Brand Safety Assessment
- Visible Brand Detection (Mercedes-Benz, VOGUE, YAMAHA, etc.)
- Mood & Tone Analysis
- Consumer Level Insights

## Installation

### Import to Tizen Studio

1. Open Tizen Studio
2. File → Import → Tizen → Tizen Project
3. Select the `GraphonAdsDemo` directory
4. Build and run on Tizen TV Simulator

### Run in Browser (for testing)

Simply open `index.html` in a web browser and use keyboard:
- **Up/Down Arrow Keys**: Navigate through insights
- **Enter**: Play/Pause video or trigger brand video playback
- **ESC**: Close application

## Project Structure

```
GraphonAdsDemo/
├── index.html          # Main HTML structure
├── style.css           # Styling
├── app.js              # Application logic and remote control handling
├── report_data.js      # AI analysis data
├── config.xml          # Tizen app configuration
├── icon.png            # App icon
└── media/
    ├── video.mp4                        # Main demo video
    └── All-New Mercedes-Benz SLK.mp4   # Brand advertisement
```

## Key Technologies

- **Tizen Web Application**: Built for Samsung Smart TVs
- **Remote Control API**: Custom key event handling for TV navigation
- **Video API**: Dynamic video source switching
- **Responsive UI**: Optimized for 1920x1080 TV displays

## Remote Control Mapping

| Button | Action |
|--------|--------|
| ↑ Up | Navigate to previous insight |
| ↓ Down | Navigate to next insight |
| Enter | Play brand video (on Visible Brands) or toggle play/pause |
| Back/Return | Exit application |

## Recent Updates

### Brand Video Playback Feature
- Added interactive brand video playback when selecting "Visible Brands" insight
- Implemented automatic return to main video after brand video completes
- Enhanced user experience with status indicators and smooth transitions

## License

This is a demonstration project for Graphon AI advertising analysis technology.

## Author

**Graphon** - AI-Powered Video Marketing Analysis
