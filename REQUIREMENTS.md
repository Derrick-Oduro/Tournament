# Tournament Simulation App - Requirements & Features

## Esports-Focused | Modular | Highly Customizable

## 1. Core Concept

### 1.1 Design Philosophy

- **Fully Modular**: Each tournament type (League, UCL, World Cup) operates independently
- **Multi-Tournament System**: Run multiple competitions simultaneously (e.g., League + UCL + Cup in one season)
- **Unlimited Customization**: No fixed team counts - support any number of teams (2 to 1000+)
- **Esports-Ready**: Fast-paced, arcade-style simulation, less realistic constraints
- **Tournament Integration**: Link competitions together (e.g., league winner auto-qualifies for UCL)
- **Social Platform**: Users can create, share, and follow each other's tournaments
- **Community-Driven**: Share team logos, tournament templates, and compete on leaderboards

### 1.2 Technical Requirements

- **Frontend**: React Native (Expo) for cross-platform mobile support
- **Backend**:
  - **Server**: Express.js (Node.js) REST API
  - **Database**: PostgreSQL or MySQL for cloud data, SQLite for local/offline
  - **Authentication**: JWT-based authentication system
  - **Storage**: Cloud storage for images (AWS S3, Cloudinary, or similar)
  - **Hosting**: Deploy on Railway, Render, Heroku, AWS, or DigitalOcean
- **State Management**: Redux/Zustand for complex multi-tournament states
- **API Communication**: Axios/Fetch for REST API calls
- **Real-time Updates**: WebSockets (Socket.io) for live match simulation + social feed (optional)
- **Offline Support**:
  - Full functionality with local SQLite database
  - Background sync when online
  - Conflict resolution for offline changes
- **Data Export**: Ability to export tournament data (JSON/CSV)
- **Image Handling**:
  - Multer for file uploads
  - Sharp for image processing/compression
  - Client-side caching for performance

### 1.3 Performance Requirements

- Handle any number of teams (stress-tested up to 200+ teams per tournament)
- Smooth match simulation (< 50ms per match)
- Support 10+ concurrent active tournaments
- Instant standings/table updates
- Efficient database queries (indexed properly)
- Fast image loading and caching (< 200ms)
- Support 1000+ concurrent users (cloud backend)

### 1.4 User & Social Features Overview

- **User Accounts**: Sign up, login, profile management
- **Tournament Visibility**:
  - Private (only creator can view)
  - Unlisted (only with link)
  - Public (discoverable, followable)
- **Social Interactions**:
  - Follow other users
  - Follow specific tournaments
  - Share tournaments (link, image export)
  - Like/react to tournaments
  - Comment on tournament updates (optional)
- **Media Library**:
  - Upload custom team logos
  - Personal gallery of saved images
  - Community gallery (public logos)
  - Quick search and reuse
- **Leaderboards & Competition**:
  - User rankings (tournaments created/completed)
  - Popular tournaments
  - Featured community content

---

## 2. User Authentication & Profile System

### 2.1 Authentication Methods

**Sign Up Options:**

- Email + Password
- Google Sign-In
- Apple Sign-In
- Guest Mode (local only, can upgrade later)

**Features:**

- Email verification
- Password reset flow
- Account deletion
- Data export (GDPR compliance)

### 2.2 User Profile

**Profile Information:**

- Username (unique, 3-20 characters)
- Display Name
- Profile Picture
- Bio (optional, 200 characters)
- Location/Country (optional)
- Joined Date
- Account Stats:
  - Tournaments created
  - Total matches simulated
  - Followers count
  - Following count

**Profile Settings:**

- Change password
- Update email
- Privacy settings
- Notification preferences
- Data management (export/delete)

### 2.3 Privacy & Visibility Settings

**Tournament Privacy Levels:**

- **Private**: Only creator can view & edit
- **Unlisted**: Anyone with link can view (not discoverable)
- **Public**: Discoverable in explore feed, can be followed

**Profile Privacy:**

- Public profile (anyone can view)
- Private profile (only followers can view tournaments)
- Hide followers/following lists

### 2.4 User Relationships

**Following System:**

- Follow other users to see their public tournaments
- Follow specific tournaments for updates
- Unfollow anytime
- Block users (hide their content)

**Notifications:**

- New follower
- Tournament you follow has updates (match results, stage progression)
- User you follow creates new tournament
- Your tournament gets followers
- Customizable notification preferences

---

## 3. Social & Sharing Features

### 3.1 Tournament Sharing

**Share Options:**

- **Copy Link**: Direct link to tournament (respects privacy settings)
- **Share to Social Media**: Pre-formatted post with tournament summary
- **Export as Image**:
  - Bracket visualization
  - Final standings table
  - Tournament summary card
- **QR Code**: Generate QR for easy sharing
- **Embed Code**: For websites (if applicable)

**Shareable Content:**

- Full tournament (all data)
- Current standings
- Match results
- Knockout bracket
- Statistics leaderboard

### 3.2 Discover & Explore

**Explore Feed:**

- **Trending**: Most followed/active tournaments
- **Recent**: Newly created public tournaments
- **Popular**: Highly rated/followed tournaments
- **Following**: Updates from users/tournaments you follow
- **Recommended**: Based on your activity

**Search & Filters:**

- Search by tournament name
- Search by creator username
- Filter by format (League, UCL, World Cup, etc.)
- Filter by status (In Progress, Completed, Setup)
- Filter by team count
- Sort by: Most Popular, Newest, Ending Soon

### 3.3 Tournament Interactions

**Actions:**

- **Follow Tournament**: Get notifications for updates
- **Duplicate/Clone**: Copy tournament structure to your account
- **Like/Favorite**: Show appreciation
- **Report**: Flag inappropriate content

**Engagement Stats (visible to creator):**

- Total views
- Total followers
- Shares count
- Likes/favorites count

### 3.4 Social Feed (Optional Feature)

**Activity Feed:**

- User you follow created a tournament
- Tournament you follow completed a stage
- User completed an epic tournament
- New featured tournament

**Feed Filters:**

- All activity
- Only users I follow
- Only tournaments I follow
- My activity

---

## 4. Media & Image Gallery System

### 4.1 Logo Upload & Management

**Upload Sources:**

- Camera (take photo)
- Photo library
- File system
- URL import
- Icon library (built-in icons)

**Image Processing:**

- Auto-crop to square
- Resize to optimized dimensions (256x256, 512x512)
- Compression (maintain quality, reduce size)
- Format conversion (PNG/JPG → optimized format)
- Background removal (optional, advanced feature)

**Upload Restrictions:**

- Max file size: 5MB per image
- Supported formats: PNG, JPG, JPEG, WebP
- Aspect ratio: Prefer square, auto-crop others
- Content moderation: Filter inappropriate images (AI)

### 4.2 Personal Gallery

**My Gallery Features:**

- All logos uploaded by user
- Grid view with thumbnails
- Search by name/tags
- Organize into folders/collections
- Bulk actions (delete, move, share)
- Usage tracking (which teams use which logos)

**Gallery Actions:**

- Upload new logo
- Edit logo (crop, rotate, filter)
- Delete logo (with warning if in use)
- Rename logo
- Add to favorites
- Set as default for quick access
- Share logo to community gallery

### 4.3 Community Gallery

**Public Logo Library:**

- Browse logos shared by community
- Search by keyword, category, tags
- Filter by: Popular, Recent, Most Used
- Categories:
  - Sports teams (football, basketball, etc.)
  - Esports organizations
  - Countries/flags
  - Abstract/geometric
  - Animals/mascots
  - Custom designs

**Using Community Logos:**

- One-click add to personal gallery
- Credit to original uploader (optional)
- Download count tracking
- Like/favorite system

**Uploading to Community:**

- User can mark logos as "public"
- Add tags and category
- Add description/attribution
- Moderation queue (prevent duplicates/inappropriate)
- Original uploader retains credit

### 4.4 Logo Assignment

**Assigning Logos to Teams:**

- Browse personal gallery
- Browse community gallery
- Upload new logo on the spot
- Use built-in icon library
- Leave blank (default icon)

**Logo Reusability:**

- Same logo can be used for multiple teams
- Logo updates don't affect existing tournaments (copy, not reference)
- Quick "use recently used logos" section
- Suggest logos based on team name (AI matching)

### 4.5 Image Storage & CDN

**Backend Storage:**

- Cloud storage via Express API (AWS S3, Cloudinary, or similar)
- CDN for fast delivery globally
- Automatic image optimization (Sharp middleware)
- Multiple size variants (thumbnail, medium, full)

**Caching Strategy:**

- Cache images locally on device
- Offline access to previously loaded images
- Smart preloading for better UX
- Clear cache option (settings)

---

## 5. Independent Tournament Formats

**Each format is a standalone module that can run independently or combined with others**

### 2.1 League Format (Round-Robin)

**Fully Customizable League Competition**

**Core Settings:**

- **Teams**: Any number (2 to unlimited)
  - Single division: 8, 10, 12, 16, 18, 20, 24+ teams
  - Multi-division: Create multiple leagues (Division 1, 2, 3, etc.)
- **Rounds**:
  - Single round-robin (play once)
  - Double round-robin (home & away)
  - Triple/Quadruple rounds (for smaller team counts)
  - Custom: Define exact number of rounds
- **Points System**: Fully customizable
  - Default: Win=3, Draw=1, Loss=0
  - Custom: Any points (e.g., Win=2, No draws allowed)
  - Bonus points (attack bonus, fair play bonus)
- **Scheduling**:
  - All teams play each matchday OR
  - Flexible scheduling (some teams have bye weeks)
  - Simultaneous matches or sequential

**Advanced Features:**

- Split season (Opening/Closing championships)
- Promotion/Relegation zones (customize positions & colors)
- Qualification spots for other tournaments (e.g., Top 4 to UCL)
- Tiebreaker rules (fully customizable priority):
  - Points → Goal Difference → Goals Scored → Head-to-Head → Custom
- Home/Away balance or neutral venue
- Matchday labels (Matchday, Week, Round, etc.)

**Integration:**

- Link to UCL: Top N teams qualify automatically
- Link to Cup: All teams can participate
- Link to Relegation Playoffs: Bottom teams play-off

---

### 2.2 World Cup / Tournament Format

**Group Stage + Knockout Competition**

**Core Settings:**

- **Total Teams**: Any number divisible by group size OR flexible
  - Examples: 8, 12, 16, 24, 32, 48, 64+ teams
- **Group Stage**:
  - Number of groups: Any (2 to 20+ groups)
  - Teams per group: Any (2, 3, 4, 5, 6+ teams)
  - Matches: Single or double round-robin within groups
  - Qualification: Top N teams advance (1, 2, 3, or custom)
  - Wildcards: Best 3rd place teams can advance
  - Seeding system: Manual or automatic pot-based draw

**Knockout Stage:**

- Bracket size: Automatically calculated from qualified teams
- Knockout rounds: Automatic (R32 → R16 → QF → SF → F)
- Match format:
  - Single match (neutral venue)
  - Two-legged (home & away aggregate)
  - Best-of-3 or Best-of-5 series (esports style)
- Extra time: Enable/disable, customize duration
- Penalties: Enable/disable
- Third-place playoff: Optional

**Advanced Features:**

- Custom bracket seeding (1st Group A vs 2nd Group B, etc.)
- Country/Region protection in groups (optional)
- Balanced draw with constraints
- Handle odd numbers of qualified teams
- Loser bracket routing (to another tournament)

**Integration:**

- Standalone or combined with league
- Use league standings to seed groups
- Tournament winner qualifies for next edition

---

### 2.3 UCL Format (Old - Group + Knockout)

**Champions League Style Competition**

**Core Settings:**

- **Total Teams**: Fully flexible (16, 24, 32, 40, 48+ teams)
- **Group Stage**:
  - Number of groups: Any (4, 6, 8, 10+ groups)
  - Teams per group: Any (3, 4, 5, 6 teams)
  - Matches: Double round-robin (home & away)
  - Qualification: Top N advance (typically 2)
  - 3rd place: Optional drop to secondary tournament
  - Seeding: Pot-based or manual

**Knockout Stage:**

- Two-legged ties (home & away)
- Aggregate scoring with away goals rule (optional)
- Rounds: R16 → QF → SF → Final
- Final: Single match at neutral venue or two-legged
- Seeding: Group winners vs runners-up (no same group)

**Advanced Features:**

- Country protection: Teams from same country can't meet early
- Pot system: Seeds based on coefficients/ratings
- Balanced schedule generation
- Legacy mode: Classic bracket (1A vs 2B, 1C vs 2D, etc.)
- Flexible qualification spots per group (1-4 teams)

**Integration:**

- Link to league: Top N league teams qualify
- Link to cup: Cup winner qualifies
- Link to secondary tournament: 3rd place drops to Europa-style

---

### 2.4 UCL Format (New - Swiss Model)

**Modern Champions League Swiss System**

**Core Settings:**

- **Total Teams**: Any number (24, 32, 36, 40, 48+ teams)
- **League Phase**:
  - Single unified table (no groups)
  - Each team plays X matches (customize: 6, 8, 10, etc.)
  - Opponent selection:
    - Pot-based (face 2 from each pot)
    - Random balanced
    - Manual selection
  - Home/Away balance (equal home & away matches)

**Qualification Rules** (Fully Customizable):

- Top X: Direct to Round of 16 (e.g., Top 8)
- Middle Y: Playoff round (e.g., 9th-24th)
- Bottom Z: Eliminated (e.g., 25th-36th)
- Custom thresholds for any team count

**Knockout Phase:**

- Seeded bracket (higher seeds face lower seeds)
- Two-legged ties or single matches
- Bracket format: Traditional or reseeded
- Final: Single match or two-legged

**Advanced Features:**

- Pot creation from ratings/coefficients
- Fixture balance algorithm
- Avoid repeat opponents if possible
- Reseeding after league phase
- Flexible playoff format (single match or two-legged)

**Integration:**

- Link to league: Auto-qualify top teams
- Dynamic qualification based on league position
- Coefficient calculation for future editions

---

### 2.5 Knockout / Cup Tournament

**Pure Elimination Competition**

**Core Settings:**

- **Teams**: Any number (2 to unlimited)
  - Perfect bracket: 4, 8, 16, 32, 64, 128 teams
  - Imperfect: Byes in first round for top seeds
- **Format Options**:
  - Single Elimination: Lose once, eliminated
  - Double Elimination: Winners + Losers brackets
  - Best-of-N Series: BO3, BO5, BO7 (esports style)

**Seeding:**

- Manual seeding (drag & drop)
- Automatic (by rating, by random, by league position)
- Pot-based draw for each round

**Match Format:**

- Single match
- Two-legged (home & away)
- Best-of series
- Extra time + penalties (optional)

**Advanced Features:**

- Multiple rounds with bye teams
- Replays (if draw, replay the match)
- Regional brackets (separate brackets merge at finals)
- Consolation bracket (for eliminated teams)

**Integration:**

- Open cup: All league teams participate
- Linked qualification: League winner gets bye to final rounds
- Calendar integration: Scheduled between league matchdays

---

### 2.6 Swiss System Tournament

**Pairing-Based Competition**

**Core Settings:**

- **Teams**: Any number
- **Rounds**: Customize (typically 4-10 rounds)
- **Pairing System**:
  - Swiss pairing algorithm (same record faces each other)
  - Avoid repeat matchups
  - Color balance (home/away)

**Scoring:**

- Match points (1 for win, 0.5 for draw, 0 for loss)
- Tiebreakers: Buchholz, Sonneborn-Berger, etc.
- Qualification: Top N after all rounds

**Integration:**

- Useful for large team counts without groups
- Can lead to knockout phase
- Alternative to league format for shorter tournaments

---

### 2.7 Custom Hybrid Format

**Build Your Own Tournament**

**Features:**

- Mix any combination:
  - Multiple group stages
  - League + Playoff system
  - Round-robin + Swiss + Knockout
- Define custom qualification rules between phases
- Create unique tournament structures
- Save as template for reuse

**Examples:**

- NFL style: 2 divisions → Playoffs → Super Bowl
- Complex esports format: Group Stage → Swiss Stage → Playoffs
- Unique format: 3-stage tournament with eliminations

---

## 6. Multi-Tournament System (Season Mode)

**Run multiple tournaments simultaneously with automatic integration**

### 3.1 Concept: Tournament Ecosystem

- Create a "Season" that contains multiple independent tournaments
- Each tournament runs on its own schedule
- Tournaments can share teams and sync standings
- Automatic qualification/relegation between tournaments

### 3.2 Season Structure Examples

**Example 1: Full Football Season**

```
Season: "2026 Football Season"
├── Premier League (20 teams, 38 matchdays)
├── Champions League (32 teams, group + knockout)
├── FA Cup (64 teams, knockout)
└── League Cup (92 teams, knockout)

Integration Rules:
- Top 4 league teams qualify for UCL next season
- All league teams participate in domestic cups
- Cup winners qualify for UCL
- League champions get automatic group stage
```

**Example 2: Esports Season**

```
Season: "2026 Esports Circuit"
├── Regular Split (12 teams, double round-robin)
├── Mid-Season Invitational (8 teams, knockout)
├── Summer Split (12 teams, double round-robin)
└── World Championship (24 teams, swiss + knockout)

Integration Rules:
- Top 6 split teams qualify for playoffs
- Split winners qualify for MSI
- Top 3 overall qualify for Worlds
- Worlds uses coefficient from both splits
```

**Example 3: Pyramid System**

```
Season: "League Pyramid"
├── Division 1 (20 teams)
├── Division 2 (24 teams)
├── Division 3 (24 teams)
└── Division 4 (28 teams)

Integration Rules:
- Top 3 from each div promoted
- Bottom 3 from each div relegated
- Promotion playoffs for 4th-7th place
- Automatic end-of-season relegation
```

### 3.3 Tournament Linking Features

**Qualification Links:**

- **Direct Qualification**: Top N from Tournament A → Tournament B
- **Conditional Qualification**: If team wins Cup AND finishes top 6 in league
- **Point-based**: Accumulate points across multiple tournaments
- **Coefficient System**: Performance-based seeding for next edition

**Team Sharing:**

- All tournaments in a season share the same team pool
- Team participates in multiple tournaments concurrently
- Track team record across all competitions
- Cross-tournament statistics aggregation

**Schedule Coordination:**

- Calendar view showing all tournament matches
- Avoid scheduling conflicts (same team on same day)
- Automatic spacing (UCL on midweek, League on weekend)
- Manual override for specific matchdays

**Relegation/Promotion:**

- End-of-season automatic movement
- Define promotion/relegation spots per division
- Playoff systems for promotion (mini-tournament)
- Custom rules (e.g., swap 3rd from bottom with 3rd from top of lower div)

### 3.4 Season Management Features

**Season Dashboard:**

- Overview of all active tournaments
- Quick stats: Next matches, Recent results, Standings snapshot
- Calendar view with all fixtures
- Simulate entire season or specific tournaments

**Global Team Rankings:**

- Cross-tournament power rankings
- Season-long performance tracking
- Coefficient calculation system
- Custom ranking formula

**Season Templates:**

- Save season structure as template
- Quick-start presets (England, Spain, Esports, Custom)
- Share season templates
- Clone previous season

**Season Progression:**

- Simulate all matches for a specific date
- Simulate entire matchday across all tournaments
- Fast-forward to specific tournament stage
- Season summary and awards

### 3.5 Independent vs Linked Mode

**Independent Mode:**

- Each tournament operates in isolation
- No qualification rules
- No shared calendar
- Simple, standalone competitions

**Linked Season Mode:**

- Tournaments integrated as described above
- Shared teams and calendar
- Automatic qualification/relegation
- Complex ecosystem management

_User chooses mode when creating tournament_

---

## 7. Core Features

### 4.1 Team Management

- **Create/Edit/Delete Teams**
  - Team name, logo/badge (image upload or icon)
  - Team colors (primary/secondary)
  - Stadium name and capacity
  - Country/region
  - Team rating/strength (for simulation)
- **Team Categories**
  - Club teams
  - National teams
  - Custom teams
- **Team Import/Export**
  - Predefined team packs (EPL, La Liga, World Cup nations, etc.)
  - Import from JSON/CSV
  - Share teams between tournaments
  - Bulk create teams (generate N teams with random names)

### 4.2 Player Management (Optional Advanced Feature)

- Player roster for each team
- Player attributes (skill rating, position, age)
- Player statistics tracking
- Injuries/suspensions
- Transfers between tournaments

### 4.3 Tournament Creation (Flexible, No Fixed Limits)

- **Configuration Wizard**
  - Tournament name and year
  - Format selection (from templates above)
  - Team selection (manual or random draw)
  - Customization options
- **Advanced Settings**
  - Match duration display
  - Simulation speed
  - Home advantage factor
  - Fatigue/form system
  - Weather conditions (optional)
  - Custom scoring terminology (Goals, Points, Frags, etc.)

### 4.4 Match Simulation Engine

- **Simulation Modes**
  - Instant (show final result immediately)
  - Quick (animated score updates, 1-5 seconds)
  - Detailed (minute-by-minute with events)
  - Auto-simulate (batch process multiple matches)
- **Match Events**
  - Goals (scorer, assist, minute)
  - Cards (yellow, red, second yellow)
  - Substitutions
  - Penalties awarded
  - Own goals
  - VAR decisions (optional)
- **Result Factors**
  - Team strength/rating
  - Home advantage
  - Recent form
  - Head-to-head history
  - Randomness factor (customizable)
- **Extra Time & Penalties**
  - Automated or manual penalty shootouts
  - Golden goal option (historical)
  - Best-of series support (esports style)

### 4.5 Statistics & Analytics

- **Tournament Stats**
  - Top scorers (Golden Boot)
  - Most assists
  - Most clean sheets
  - Most cards
  - Best goal difference
  - Fair play ranking
- **Team Stats**
  - Matches played/won/drawn/lost
  - Goals for/against
  - Possession average (optional)
  - Pass accuracy (optional)
  - Form (last 5 matches)
- **Historical Records**
  - Past tournament winners
  - All-time top scorer
  - Biggest wins/losses
  - Most appearances

### 4.6 Standings & Tables

- **League Table**
  - Sortable columns (Pts, GD, GF, etc.)
  - Real-time updates after each match
  - Colored zones (promotion, relegation, qualification)
  - Form indicator (W-D-L-W-W)
- **Group Standings**
  - Multiple group tables view
  - Qualification indicators
- **Knockout Bracket**
  - Interactive bracket tree
  - Zoom/scroll for large brackets
  - Click to see match details

### 4.7 Tournament Management

- **Fixtures/Schedule**
  - Matchday view
  - Calendar view
  - Filter by team/round/date
  - Reschedule matches (if not played)
- **Draw System**
  - Automated seeded/unseeded draws
  - Manual draw (pick teams yourself)
  - Country/group protection rules
  - Visual draw ceremony animation
- **Tournament Progression**
  - Continue/Resume tournament
  - Simulate to next round
  - Simulate entire tournament
  - Reset tournament
  - Save/Load tournament states

### 4.8 Customization Options

- **Rules Configuration**
  - Points for win/draw/loss
  - Number of teams qualified from groups
  - Tiebreaker priority
  - Away goals rule enable/disable
  - Number of substitutions allowed
  - Extra time duration
- **Display Preferences**
  - Date/time format
  - Team name display (full/short)
  - Score display style
  - Language support
- **Difficulty/Realism**
  - Simulation randomness level
  - Upset frequency
  - Score realism (low/high-scoring)

---

## 8. Database Schema

**Designed for flexibility, multi-tournament, and multi-user support**

### 8.1 User & Social Tables

```sql
-- Users (Account management)
CREATE TABLE users (
    id TEXT PRIMARY KEY, -- UUID (generated by backend)
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    display_name TEXT,
    profile_picture_url TEXT,
    bio TEXT,
    country TEXT,
    is_verified BOOLEAN DEFAULT 0,
    account_status TEXT DEFAULT 'active', -- 'active', 'suspended', 'deleted'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
);

-- User Stats (Cached for performance)
CREATE TABLE user_stats (
    user_id TEXT PRIMARY KEY,
    tournaments_created INTEGER DEFAULT 0,
    tournaments_completed INTEGER DEFAULT 0,
    matches_simulated INTEGER DEFAULT 0,
    followers_count INTEGER DEFAULT 0,
    following_count INTEGER DEFAULT 0,
    total_views INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User Settings
CREATE TABLE user_settings (
    user_id TEXT PRIMARY KEY,
    profile_privacy TEXT DEFAULT 'public', -- 'public', 'private'
    default_tournament_privacy TEXT DEFAULT 'public', -- 'private', 'unlisted', 'public'
    notifications_enabled BOOLEAN DEFAULT 1,
    notify_new_follower BOOLEAN DEFAULT 1,
    notify_tournament_updates BOOLEAN DEFAULT 1,
    notify_new_tournament_from_following BOOLEAN DEFAULT 1,
    email_notifications BOOLEAN DEFAULT 1,
    theme TEXT DEFAULT 'system', -- 'light', 'dark', 'system'
    language TEXT DEFAULT 'en',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User Follows (User following another user)
CREATE TABLE user_follows (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    follower_id TEXT NOT NULL, -- User who is following
    following_id TEXT NOT NULL, -- User being followed
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (following_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(follower_id, following_id),
    CHECK (follower_id != following_id)
);

-- User Blocks
CREATE TABLE user_blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blocker_id TEXT NOT NULL,
    blocked_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (blocker_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (blocked_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(blocker_id, blocked_id)
);

-- Media Library (User-uploaded images/logos)
CREATE TABLE media_library (
    id TEXT PRIMARY KEY, -- UUID
    user_id TEXT NOT NULL,
    filename TEXT NOT NULL,
    original_filename TEXT,
    file_url TEXT NOT NULL, -- Cloud storage URL
    thumbnail_url TEXT,
    file_size INTEGER, -- In bytes
    mime_type TEXT,
    width INTEGER,
    height INTEGER,
    is_public BOOLEAN DEFAULT 0, -- Share to community gallery
    category TEXT, -- 'sports', 'esports', 'flags', 'abstract', etc.
    tags TEXT, -- Comma-separated or JSON array
    description TEXT,
    usage_count INTEGER DEFAULT 0, -- How many times used
    likes_count INTEGER DEFAULT 0,
    downloads_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Media Likes (Users liking community gallery images)
CREATE TABLE media_likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    media_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (media_id) REFERENCES media_library(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(media_id, user_id)
);

```

### 8.2 Tournament & Team Tables

```sql
-- Teams (Now linked to users, shared across tournaments)
CREATE TABLE teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL, -- Owner of the team
    name TEXT NOT NULL,
    short_name TEXT,
    logo_id TEXT, -- Reference to media_library
    country TEXT,
    rating INTEGER DEFAULT 50,
    primary_color TEXT DEFAULT '#000000',
    secondary_color TEXT DEFAULT '#FFFFFF',
    stadium_name TEXT,
    is_public BOOLEAN DEFAULT 0, -- Share to community
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (logo_id) REFERENCES media_library(id) ON DELETE SET NULL
);

-- Seasons (Container for linked tournaments)
CREATE TABLE seasons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL, -- "2026 Football Season"
    year TEXT,
    mode TEXT DEFAULT 'linked', -- 'linked' or 'independent'
    status TEXT DEFAULT 'active', -- 'active', 'completed', 'archived'
    privacy TEXT DEFAULT 'public', -- 'private', 'unlisted', 'public'
    config JSON, -- Season-wide settings
    views_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Tournaments (Can be part of a season or standalone)
CREATE TABLE tournaments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL, -- Tournament creator/owner
    season_id INTEGER, -- NULL for independent tournaments
    name TEXT NOT NULL,
    format TEXT NOT NULL, -- 'league', 'worldcup', 'ucl_old', 'ucl_new', 'knockout', 'swiss', 'custom'
    status TEXT DEFAULT 'setup', -- 'setup', 'in_progress', 'completed'
    privacy TEXT DEFAULT 'public', -- 'private', 'unlisted', 'public'
    current_stage TEXT, -- 'groups', 'knockouts', 'final', etc.
    config JSON NOT NULL, -- ALL tournament-specific configuration stored here
        -- Fields in config JSON:
        -- - team_count: number
        -- - groups: {count, size, qualification_spots}
        -- - knockout: {format, two_legged, extra_time, penalties}
        -- - points: {win, draw, loss}
        -- - tiebreakers: array of rules
        -- - home_advantage: number (0-100)
        -- - randomness: number (0-100)
        -- - custom settings per format
    display_order INTEGER DEFAULT 0, -- For sorting in season view
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE
);

-- Tournament Teams (many-to-many)
CREATE TABLE tournament_teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tournament_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    group_name TEXT, -- 'A', 'B', 'C', etc. (NULL for non-grouped formats)
    seed INTEGER, -- Seed/pot number for draws
    qualified_from TEXT, -- Reference to how team qualified (e.g., 'league_top4', 'cup_winner')
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    UNIQUE(tournament_id, team_id)
);

-- Qualification Rules (Links between tournaments in a season)
CREATE TABLE qualification_rules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    season_id INTEGER NOT NULL,
    source_tournament_id INTEGER NOT NULL, -- Tournament to qualify FROM
    target_tournament_id INTEGER NOT NULL, -- Tournament to qualify TO
    rule_type TEXT NOT NULL, -- 'top_n', 'bottom_n', 'winner', 'top_n_groups', 'custom'
    rule_config JSON NOT NULL, -- Configuration for rule
        -- Examples:
        -- {type: 'top_n', positions: [1,2,3,4], target_stage: 'groups'}
        -- {type: 'winner', target_stage: 'final'}
        -- {type: 'promotion', from_positions: [1,2,3], to_division: 'div1'}
    priority INTEGER DEFAULT 0, -- For resolving conflicts
    FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE,
    FOREIGN KEY (source_tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (target_tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
);

-- Matches
CREATE TABLE matches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tournament_id INTEGER NOT NULL,
    stage TEXT NOT NULL, -- 'group', 'r32', 'r16', 'qf', 'sf', 'final', 'matchday_1', etc.
    round INTEGER, -- For leagues: matchday number; For groups: round number
    match_number INTEGER, -- Order within round/stage
    home_team_id INTEGER NOT NULL,
    away_team_id INTEGER NOT NULL,
    home_score INTEGER,
    away_score INTEGER,
    home_score_et INTEGER, -- Extra time
    away_score_et INTEGER,
    home_penalties INTEGER,
    away_penalties INTEGER,
    winner_id INTEGER, -- For tracking winner directly (useful for BO3/BO5)
    status TEXT DEFAULT 'scheduled', -- 'scheduled', 'completed', 'in_progress'
    match_date DATETIME,
    is_neutral_venue BOOLEAN DEFAULT 0,
    is_second_leg BOOLEAN DEFAULT 0,
    first_leg_match_id INTEGER, -- Reference to first leg
    series_format TEXT, -- NULL, 'bo3', 'bo5', 'bo7', 'two_leg'
    series_score TEXT, -- For BO series: '2-1', for two-leg: aggregate score
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (home_team_id) REFERENCES teams(id),
    FOREIGN KEY (away_team_id) REFERENCES teams(id),
    FOREIGN KEY (winner_id) REFERENCES teams(id),
    FOREIGN KEY (first_leg_match_id) REFERENCES matches(id)
);

-- Match Events
CREATE TABLE match_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    match_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    event_type TEXT NOT NULL, -- 'goal', 'yellow_card', 'red_card', 'substitution', 'penalty', 'var'
    minute INTEGER NOT NULL,
    player_name TEXT, -- Optional if player system implemented
    description TEXT,
    FOREIGN KEY (match_id) REFERENCES matches(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- Standings (Cached for performance, recalculated after each match)
CREATE TABLE standings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tournament_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    group_name TEXT, -- NULL for league formats
    played INTEGER DEFAULT 0,
    won INTEGER DEFAULT 0,
    drawn INTEGER DEFAULT 0,
    lost INTEGER DEFAULT 0,
    goals_for INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    goal_difference INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    position INTEGER,
    form TEXT, -- Last 5 results: 'WWDLW' (limited to 5 chars)
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id),
    UNIQUE(tournament_id, team_id, group_name)
);

-- Statistics (Player/Team stats across tournaments)
CREATE TABLE statistics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tournament_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    stat_type TEXT NOT NULL, -- 'goals_scored', 'assists', 'clean_sheets', 'yellow_cards', 'red_cards'
    player_name TEXT, -- NULL for team-level stats
    value INTEGER DEFAULT 0,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id)
);
```

### 8.3 Social Interaction Tables

```sql
-- Tournament Follows (Users following specific tournaments)
CREATE TABLE tournament_follows (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    tournament_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    UNIQUE(user_id, tournament_id)
);

-- Tournament Stats (Cached for performance)
CREATE TABLE tournament_stats (
    tournament_id INTEGER PRIMARY KEY,
    views_count INTEGER DEFAULT 0,
    followers_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    shares_count INTEGER DEFAULT 0,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
);

-- Tournament Likes/Favorites
CREATE TABLE tournament_likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    tournament_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    UNIQUE(user_id, tournament_id)
);

-- Tournament Views (Track unique views)
CREATE TABLE tournament_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT, -- NULL for anonymous views (if allowed)
    tournament_id INTEGER NOT NULL,
    viewed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
);

-- Tournament Shares (Track sharing activity)
CREATE TABLE tournament_shares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    tournament_id INTEGER NOT NULL,
    share_method TEXT, -- 'link', 'image', 'social', 'qr'
    shared_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
);

-- Activity Feed (For social feed feature)
CREATE TABLE activity_feed (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL, -- User who performed the action
    activity_type TEXT NOT NULL, -- 'tournament_created', 'tournament_completed', 'stage_completed', 'followed_user', 'followed_tournament'
    tournament_id INTEGER, -- Related tournament (if applicable)
    related_user_id TEXT, -- Related user (if applicable, e.g., following someone)
    metadata JSON, -- Additional data about the activity
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE,
    FOREIGN KEY (related_user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Notifications
CREATE TABLE notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL, -- User receiving the notification
    from_user_id TEXT, -- User who triggered the notification
    type TEXT NOT NULL, -- 'new_follower', 'tournament_followed', 'tournament_update', 'new_tournament_from_following'
    tournament_id INTEGER, -- Related tournament
    title TEXT NOT NULL,
    message TEXT,
    is_read BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (from_user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
);

-- Create indexes for performance
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_follows_follower ON user_follows(follower_id);
CREATE INDEX idx_user_follows_following ON user_follows(following_id);
CREATE INDEX idx_media_user ON media_library(user_id);
CREATE INDEX idx_media_public ON media_library(is_public);
CREATE INDEX idx_media_category ON media_library(category);
CREATE INDEX idx_teams_user ON teams(user_id);
CREATE INDEX idx_tournaments_user ON tournaments(user_id);
CREATE INDEX idx_tournaments_privacy ON tournaments(privacy);
CREATE INDEX idx_tournaments_status ON tournaments(status);
CREATE INDEX idx_tournaments_season ON tournaments(season_id);
CREATE INDEX idx_matches_tournament ON matches(tournament_id);
CREATE INDEX idx_matches_teams ON matches(home_team_id, away_team_id);
CREATE INDEX idx_matches_status ON matches(status);
CREATE INDEX idx_matches_date ON matches(match_date);
CREATE INDEX idx_standings_tournament ON standings(tournament_id);
CREATE INDEX idx_standings_group ON standings(tournament_id, group_name);
CREATE INDEX idx_tournament_teams_tournament ON tournament_teams(tournament_id);
CREATE INDEX idx_tournament_teams_team ON tournament_teams(team_id);
CREATE INDEX idx_qualification_rules_season ON qualification_rules(season_id);
CREATE INDEX idx_tournament_follows_user ON tournament_follows(user_id);
CREATE INDEX idx_tournament_follows_tournament ON tournament_follows(tournament_id);
CREATE INDEX idx_tournament_likes_user ON tournament_likes(user_id);
CREATE INDEX idx_tournament_likes_tournament ON tournament_likes(tournament_id);
CREATE INDEX idx_activity_feed_user ON activity_feed(user_id);
CREATE INDEX idx_activity_feed_created ON activity_feed(created_at);
CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(user_id, is_read);
```

### 8.4 Key Design Decisions

**Why JSON Config Fields:**

- Maximum flexibility - each tournament format has unique settings
- No need for format-specific tables
- Easy to extend with new formats without schema changes
- Can store complex nested structures (groups, brackets, rules)

**User-Centric Architecture:**

- Every tournament, team, season, and media belongs to a user
- Privacy controls at multiple levels (profile, tournament, media)
- Social features (follows, likes) are opt-in
- Guest mode possible with local-only data (upgrade to cloud later)

**Season-Optional Design:**

- Tournaments can exist independently (season_id = NULL)
- Or be part of a linked season for complex ecosystems
- User chooses mode at creation time

**Flexible Team Counts:**

- No hard limits in schema
- Constraints enforced at application level
- Supports any number from 2 to unlimited

**Performance Optimization:**

- Standings, user stats, and tournament stats cached
- Strategic indexes on foreign keys and query patterns
- Activity feed indexed by user and time
- Social interaction tables optimized for quick lookups

**Media Storage Strategy:**

- Images stored in cloud storage via Express API (S3, Cloudinary, etc.)
- Database stores URLs reference, not binary data
- Multer + Sharp for upload processing
- Automatic generation of multiple size variants
- Local caching for offline access

**Privacy & Security:**

- User-owned data with CASCADE deletes
- Privacy levels: private, unlisted, public
- Block system for user safety
- Content moderation hooks

### 8.5 Express Backend Architecture

**Technology Stack:**

- **Framework**: Express.js (Node.js)
- **Database ORM**: Sequelize (PostgreSQL/MySQL) or Prisma
- **Authentication**: JWT (jsonwebtoken) + bcrypt for password hashing
- **File Upload**: Multer middleware
- **Image Processing**: Sharp for resizing/compression
- **Validation**: Joi or express-validator
- **Cloud Storage SDK**: AWS SDK (S3) or Cloudinary SDK
- **CORS**: cors middleware for React Native client
- **Environment**: dotenv for configuration
- **Logging**: Morgan + Winston
- **Security**: Helmet.js, rate limiting (express-rate-limit)

**Project Structure:**

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # Database connection
│   │   ├── cloudinary.js        # Cloud storage config
│   │   └── auth.js              # JWT config
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   ├── upload.js            # Multer file upload
│   │   ├── validate.js          # Request validation
│   │   ├── errorHandler.js      # Global error handler
│   │   └── rateLimit.js         # Rate limiting
│   ├── models/
│   │   ├── User.js
│   │   ├── Tournament.js
│   │   ├── Team.js
│   │   ├── Match.js
│   │   ├── Season.js
│   │   ├── Media.js
│   │   └── index.js             # Model associations
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── tournamentController.js
│   │   ├── teamController.js
│   │   ├── matchController.js
│   │   ├── mediaController.js
│   │   └── socialController.js
│   ├── routes/
│   │   ├── auth.js              # /api/auth/*
│   │   ├── users.js             # /api/users/*
│   │   ├── tournaments.js       # /api/tournaments/*
│   │   ├── teams.js             # /api/teams/*
│   │   ├── matches.js           # /api/matches/*
│   │   ├── media.js             # /api/media/*
│   │   └── social.js            # /api/social/*
│   ├── services/
│   │   ├── authService.js       # JWT generation/validation
│   │   ├── imageService.js      # Image processing
│   │   ├── simulationService.js # Match simulation logic
│   │   └── notificationService.js
│   ├── utils/
│   │   ├── validators.js
│   │   ├── helpers.js
│   │   └── constants.js
│   └── app.js                   # Express app setup
├── .env
├── .env.example
├── package.json
└── server.js                    # Entry point
```

**Core API Endpoints:**

**Authentication Routes** (`/api/auth`)

```
POST   /register              # Create new user account
POST   /login                 # Login and get JWT token
POST   /logout                # Logout (optional, client-side mostly)
POST   /refresh-token         # Refresh JWT token
POST   /forgot-password       # Request password reset
POST   /reset-password        # Reset password with token
POST   /verify-email          # Verify email address
GET    /me                    # Get current user info (requires auth)
```

**User Routes** (`/api/users`)

```
GET    /                      # Search/browse users (public profiles)
GET    /:userId               # Get user profile
PUT    /:userId               # Update user profile (own only)
DELETE /:userId               # Delete user account (own only)
GET    /:userId/tournaments   # Get user's public tournaments
GET    /:userId/stats         # Get user statistics
POST   /:userId/follow        # Follow a user
DELETE /:userId/follow        # Unfollow a user
GET    /:userId/followers     # Get user's followers
GET    /:userId/following     # Get users being followed
POST   /:userId/block         # Block a user
DELETE /:userId/block         # Unblock a user
GET    /me/gallery            # Get user's media gallery
```

**Tournament Routes** (`/api/tournaments`)

```
GET    /                      # Get tournaments (with filters, pagination)
POST   /                      # Create new tournament
GET    /:id                   # Get tournament details
PUT    /:id                   # Update tournament (owner only)
DELETE /:id                   # Delete tournament (owner only)
GET    /:id/matches           # Get all matches in tournament
POST   /:id/matches/simulate  # Simulate matches
GET    /:id/standings         # Get standings/table
GET    /:id/statistics        # Get tournament statistics
GET    /:id/bracket           # Get knockout bracket data
POST   /:id/follow            # Follow tournament
DELETE /:id/follow            # Unfollow tournament
POST   /:id/like              # Like tournament
DELETE /:id/like              # Unlike tournament
POST   /:id/share             # Track tournament share
GET    /:id/export            # Export tournament data (JSON/CSV)
POST   /:id/duplicate         # Duplicate tournament structure
```

**Team Routes** (`/api/teams`)

```
GET    /                      # Get all teams (user's + public)
POST   /                      # Create new team
GET    /:id                   # Get team details
PUT    /:id                   # Update team (owner only)
DELETE /:id                   # Delete team (owner only)
GET    /:id/statistics        # Get team statistics across tournaments
POST   /bulk                  # Create multiple teams at once
GET    /packs                 # Get predefined team packs
```

**Match Routes** (`/api/matches`)

```
GET    /:id                   # Get match details
PUT    /:id                   # Update match (simulate result)
GET    /:id/events            # Get match events
POST   /:id/simulate          # Simulate single match
POST   /simulate-batch        # Simulate multiple matches
```

**Media Routes** (`/api/media`)

```
GET    /                      # Get media library (user's + community)
POST   /upload                # Upload new image/logo
GET    /:id                   # Get media details
PUT    /:id                   # Update media metadata
DELETE /:id                   # Delete media (owner only)
POST   /:id/public            # Make media public (share to community)
POST   /:id/like              # Like community media
DELETE /:id/like              # Unlike media
GET    /community             # Browse community gallery
GET    /categories            # Get media categories
```

**Social Routes** (`/api/social`)

```
GET    /feed                  # Get activity feed (personalized)
GET    /explore               # Get explore/discover feed
GET    /trending              # Get trending tournaments
GET    /notifications         # Get user notifications
PUT    /notifications/:id/read # Mark notification as read
DELETE /notifications/:id     # Delete notification
POST   /report                # Report content
```

**Season Routes** (`/api/seasons`)

```
GET    /                      # Get user's seasons
POST   /                      # Create new season
GET    /:id                   # Get season details
PUT    /:id                   # Update season
DELETE /:id                   # Delete season
GET    /:id/tournaments       # Get all tournaments in season
```

**Middleware Chain Example:**

```javascript
// Protected route example
router.post(
  "/tournaments",
  authenticate, // Verify JWT token
  validateBody(tournamentSchema), // Validate request body
  tournamentController.create, // Controller logic
);

// File upload route example
router.post(
  "/media/upload",
  authenticate,
  upload.single("image"), // Multer middleware
  imageService.process, // Resize/compress
  mediaController.upload, // Save to cloud & DB
);

// Rate limiting example
router.post(
  "/auth/login",
  rateLimit({ windowMs: 15 * 60 * 1000, max: 5 }), // 5 requests per 15min
  authController.login,
);
```

**Authentication Flow:**

1. User signs up → Hash password with bcrypt → Save to DB
2. User logs in → Verify password → Generate JWT token (access + refresh)
3. Client stores tokens (secure storage on mobile)
4. Client sends JWT in Authorization header: `Bearer <token>`
5. Middleware verifies JWT on protected routes
6. Token expires → Refresh using refresh token
7. Logout → Client deletes tokens (optional: blacklist on server)

**Image Upload Flow:**

1. Client selects image → Sends to `/api/media/upload`
2. Multer receives file → Validates size/type
3. Sharp processes image → Resize, compress, generate thumbnails
4. Upload to cloud storage (S3/Cloudinary) → Get URLs
5. Save metadata to database → Return URLs to client
6. Client caches images locally for offline access

**Database Choice:**

- **Cloud/Production**: PostgreSQL or MySQL with Sequelize/Prisma ORM
- **Local/Offline**: SQLite embedded in mobile app
- **Sync Strategy**: When online, sync local SQLite changes to cloud PostgreSQL

**Deployment Considerations:**

- Use environment variables for sensitive data (JWT_SECRET, DB_URL, etc.)
- Enable CORS for React Native app
- Set up HTTPS/SSL in production
- Implement request logging and monitoring
- Set up automated backups for database
- Use PM2 or similar for process management
- Container deployment with Docker (optional)

---

## 9. User Interface Features

### 9.1 Authentication Screens

**Welcome/Splash Screen:**

- App logo and branding
- "Sign Up" button
- "Log In" button
- "Continue as Guest" option

**Sign Up Screen:**

- Username input (unique, availability check)
- Email input
- Password input (with strength indicator)
- Confirm password
- Terms & Privacy acceptance checkbox
- Social sign-up buttons (Google, Apple)

**Login Screen:**

- Email/Username input
- Password input
- "Forgot Password?" link
- Social login buttons
- "Don't have an account? Sign Up" link

**Guest Mode:**

- Full local functionality
- Prompt to create account to unlock social features
- Easy upgrade (no data loss)

### 9.2 Home Screen / Feed

**Logged In User:**

- **Tab 1: For You**
  - Recommended tournaments
  - Trending topics
  - Featured community content
- **Tab 2: Following**
  - Updates from users you follow
  - Updates from tournaments you follow
- **Tab 3: My Tournaments**
  - Your created tournaments (private, unlisted, public)
  - Quick create button
  - Filter and search

**Guest Mode:**

- List of local tournaments only
- Quick create button
- Banner prompting sign up for social features

### 9.3 Explore/Discover Screen

- Search bar (tournaments, users)
- Trending tournaments
- Popular creators
- Filter options (format, status, recent)
- Category tabs (All, League, World Cup, UCL, etc.)

### 9.4 Profile Screen

**Own Profile:**

- Profile picture, username, display name, bio
- Edit Profile button
- Stats (tournaments created, matches simulated, followers, following)
- Tabs:
  - **Tournaments**: Grid of user's public tournaments
  - **Media Gallery**: User's uploaded logos
  - **Followers/Following**: Lists
- Settings button

**Other User's Profile:**

- Same layout but read-only
- Follow/Unfollow button
- Block option (in menu)
- View public tournaments
- View public gallery (if shared)

### 9.5 Tournament Creation Wizard

**Step 1: Mode Selection**

- Independent Tournament vs Season Tournament
- If Season: Select existing or create new

**Step 2: Format Selection**

- Visual cards for each format with icons
- Quick description of format
- "Popular" and "Custom" sections

**Step 3: Configuration**

- Team count input (any number)
- Format-specific settings (groups, rounds, etc.)
- Points system customization
- Advanced toggles

**Step 4: Team Selection & Customization**

- Create teams or select from existing
- For each team:
  - Team name input
  - Logo selection:
    - **Browse My Gallery** (user's uploaded logos)
    - **Browse Community Gallery** (public logos)
    - **Upload New** (camera, library, or file)
    - **Icon Library** (built-in icons)
    - **Leave Blank** (default icon)
  - Team colors (primary/secondary)
  - Team rating/strength
- Quick add from team packs
- Random draw with auto-generation
- Drag-and-drop ordering for seeding

**Step 5: Privacy & Settings**

- Privacy level:
  - 🔒 **Private**: Only you can view
  - 🔗 **Unlisted**: Anyone with link can view
  - 🌍 **Public**: Discoverable and followable
- Enable comments (optional)
- Allow cloning/duplication by others

**Step 6: Review & Create**

- Summary of all settings
- Edit buttons for each section
- Save as template option (for reuse)
- Create button

### 9.6 Tournament Dashboard

- Tournament header (name, format, stage, privacy icon)
- Creator info (avatar, username) - clickable to profile
- Social stats (if public): 👁️ Views, ⭐ Followers, ❤️ Likes
- Action buttons:
  - **Follow** (for other users) / **Edit** (for owner)
  - **Share** (link, image, QR code)
  - **Like/Favorite**
  - **More** (duplicate, report, settings)
- Quick stats overview
- Navigation tabs: Overview, Matches, Standings, Bracket, Statistics
- Simulation controls: Simulate Next, Simulate All
- Progress indicator

### 9.7 Match Screen

- Match card with team badges
- Live simulation view
- Event timeline
- Match details drawer
- Quick simulate all matches button

### 6.5 Standings Screen

- Tabbed view for multiple groups
- Sortable table
- Color-coded zones
- Tap team for detailed stats

### 6.6 Knockout Bracket Screen

- Scrollable/zoomable bracket tree
- Responsive design for small screens
- Match results on bracket
- Tap to see match details

### 6.7 Statistics Screen

- Top scorers leaderboard
- Team comparison
- Charts and graphs (optional)
- Filterable categories

### 6.8 Season Management (Linked Mode)

- Season dashboard with all tournaments
- Calendar view (all fixtures)
- Global simulator (simulate by date)
- Qualification tracker
- Season awards and summary

---

## 10. Advanced Features (Phase 2+)

### 7.1 AI & Predictions

- Match outcome prediction based on stats
- Tournament winner prediction
- Form-based recommendations

### 7.2 Player Management System

- Full player rosters for teams
- Player attributes and ratings
- Injuries and suspensions
- Transfer system between tournaments

### 7.3 Social Features

- Share tournament results (text, image, JSON export)
- Export bracket/table as image
- Challenge mode (predict results before simulating)
- Cloud sync (optional)
- Share season templates

### 7.4 Historical Simulations

- Import historical tournament data
- Replay actual tournaments with real results
- "What if" scenario mode
- Historical team ratings database

### 7.5 Advanced Simulation Engine

- Player-level detailed simulation
- Tactical formations and strategies
- In-match momentum system
- Dynamic difficulty adjustment
- Coaching decisions (substitutions, tactics)

### 7.6 Custom Competition Builder (Visual Editor)

- Drag-and-drop tournament designer
- Create completely custom formats
- Visual flow editor for stages
- Custom rules engine
- Save and share templates
- Import community templates

### 7.7 Achievements & Progression

- User profile and level system
- Achievements for completing tournaments
- Challenges (win with underdog, etc.)
- Hall of Fame for legendary runs

---

## 8. Implementation Priority & Roadmap

### Phase 1: Core Foundation (MVP)

**Goal: Get basic independent tournaments working (Local + Backend)**

1. **Express Backend Setup**
   - Initialize Express.js server
   - Set up PostgreSQL/MySQL database with Sequelize/Prisma
   - Configure JWT authentication
   - Create user registration and login endpoints
   - Set up middleware (auth, validation, error handling)
   - Basic user CRUD operations
   - Deploy to hosting platform (Railway/Render/Heroku)

2. **Local Database Setup**
   - SQLite schema implementation for offline mode
   - Core tables (users, teams, tournaments, matches, standings)
   - Basic queries and indexes
   - Sync strategy planning

3. **Team Management**
   - Frontend: CRUD operations for teams
   - Backend API: Team endpoints
   - Team list view
   - Basic attributes (name, rating, colors)
   - Local + cloud storage

4. **Simple League Format**
   - Create league with any number of teams
   - Generate round-robin fixtures (Frontend logic)
   - Basic instant simulation
   - Standings calculation
   - Save/load tournament (local + cloud sync)

5. **Authentication UI**
   - Welcome/Login/Sign Up screens
   - JWT token management
   - Guest mode support
   - Profile screen basics

6. **Basic UI**
   - Home screen with tournament list
   - Simple tournament creation wizard
   - Match list view
   - Standings table
   - Basic navigation

**Deliverable: Functional single-league tournament app with user accounts**

---

### Phase 2: Multiple Formats

**Goal: Add all major tournament formats**

1. **Knockout Tournament**
   - Bracket generation for any team count
   - Single elimination
   - Bracket visualization
   - Seeding system

2. **World Cup Format**
   - Group stage configuration
   - Group draw system
   - Knockout bracket from groups
   - Third-place playoff

3. **Old UCL Format**
   - Group stage (customizable groups)
   - Two-legged knockout ties
   - Aggregate scoring
   - Seeding/pot system

4. **Enhanced Simulation**
   - Match events (goals, cards, timing)
   - Quick simulation mode
   - Detailed minute-by-minute
   - Statistics tracking

5. **Media Gallery System**
   - Backend: Image upload API with Multer + Sharp
   - Cloud storage integration (S3/Cloudinary)
   - Frontend: Upload logo UI (camera, library, file)
   - Personal gallery view and management
   - Assign logos to teams during creation
   - Image processing and optimization

**Deliverable: Multi-format tournament app with custom logos**

---

### Phase 3: Multi-Tournament System

**Goal: Enable season mode with linked tournaments**

1. **Season Framework**
   - Seasons table and management
   - Link tournaments to seasons
   - Season dashboard UI

2. **Qualification System**
   - Qualification rules configuration
   - Automatic team qualification
   - Promotion/relegation logic
   - Cross-tournament integration

3. **Unified Calendar**
   - Calendar view for all matches
   - Schedule coordination
   - Batch simulation by date
   - Conflict resolution

4. **New UCL (Swiss Model)**
   - Swiss system implementation
   - Fixture generation algorithm
   - Qualification thresholds

5. **Social Features**
   - Backend: Social interaction APIs (follow, like, share)
   - Tournament privacy settings
   - Follow users and tournaments
   - Activity feed and notifications
   - Explore/discover page
   - Community gallery for logos
   - Tournament sharing (link, image export, QR code)

**Deliverable: Full season ecosystem with social features**

---

### Phase 4: Customization & Polish

**Goal: Maximum flexibility and UX refinement**

1. **Advanced Customization**
   - Custom rules builder
   - Template system
   - Format customization UI
   - Import/export configurations

2. **Enhanced UI/UX**
   - Animations and transitions
   - Dark mode / themes
   - Improved bracket visualization
   - Charts and statistics graphs

3. **Data Management**
   - Team packs (import pre-made teams)
   - Bulk team creation
   - Tournament templates
   - Export/import JSON

4. **Swiss System & Custom Formats**
   - Full Swiss system
   - Hybrid format builder basics
   - Best-of-series support

**Deliverable: Highly customizable tournament platform**

---

### Phase 5: Advanced Features (Post-Launch)

**Goal: Add depth and engagement**

1. **Player Management**
   - Player rosters
   - Player stats and attributes
   - Transfer system
   - Injuries/suspensions

2. **Social & Sharing**
   - Export images
   - Share results
   - Cloud sync
   - Template marketplace

3. **Advanced Simulation**
   - Tactical simulation
   - Formation system
   - Dynamic AI
   - Historical data

4. **Custom Competition Builder**
   - Visual format editor
   - Drag-and-drop designer
   - Advanced rule engine

**Deliverable: Feature-complete esports tournament platform**

---

## 11. Implementation Priority & Roadmap

### 9.1 Unit Testing

- **Simulation Engine**: Test result generation, randomness, tiebreakers
- **Fixture Generation**: Validate round-robin, bracket, Swiss algorithms
- **Standings Calculation**: Test points, goal difference, all tiebreaker scenarios
- **Qualification Logic**: Ensure correct team progression between tournaments
- **Database Operations**: CRUD operations, cascading deletes, data integrity

### 9.2 Integration Testing

- **Complete Tournament Flows**: From creation to completion
- **Multi-Tournament Scenarios**: Season mode with linked tournaments
- **Database Performance**: Large tournaments (100+ teams, 1000+ matches)
- **State Management**: Save/load, resume, reset functionality

### 9.3 UI/UX Testing

- **User Flows**: Tournament creation wizard, simulation, navigation
- **Responsiveness**: Different screen sizes, orientations
- **Edge Cases UI**: Very long team names, unusual team counts
- **Accessibility**: Touch targets, text size, color contrast

### 9.4 Performance Testing

- **Simulation Speed**: Benchmark batch simulation of 380 matches (full season)
- **Database Queries**: Ensure sub-100ms for standings calculations
- **Memory Usage**: Monitor during large tournament processing
- **App Launch**: Cold start and warm start times

### 9.5 Edge Case Testing

- **Odd Team Counts**: 3, 5, 7, 13, etc. in various formats
- **Complex Tiebreakers**: Multiple teams tied on all metrics
- **Incomplete Tournaments**: Handle edge cases in partial progression
- **Data Limits**: Very high team counts (500+ teams)
- **Penalty Shootouts**: Ensure deterministic winner selection

---

## 10. Technical Considerations

### 10.1 Simulation Algorithm

- **Weighted Random**: Team rating + randomness factor
- **Score Distribution**: Realistic score probabilities (0-0 more likely than 10-10)
- **Form Modifiers**: Recent results affect next match probability
- **Home Advantage**: Configurable boost (default 5-15%)

### 10.2 Fixture Generation Algorithms

- **Round-Robin**: Circle method for even teams, bye rotation for odd
- **Bracket**: Balanced seeding (1v16, 2v15, etc.)
- **Swiss**: Prevent repeat matchups, balance home/away
- **Group Draw**: Pot-based random with constraints

### 10.3 Performance Optimizations

- **Batch Calculations**: Update standings after all matches in a round
- **Indexed Queries**: Strategic indexes on tournament_id, team_id, date
- **Lazy Loading**: Load match events only when viewed
- **Pagination**: For large tournament lists

### 10.4 State Management

- **Tournament State**: Store in Redux/Zustand for quick access
- **Persistence**: SQLite for long-term storage
- **Sync Strategy**: Update DB after each action, reload on app start
- **Undo/Redo**: Optional feature for accidental simulations

---

## 11. Documentation Needs

### 11.1 User Documentation

- **Getting Started Guide**: First tournament walkthrough
- **Format Explanations**: Visual guides for each tournament type
- **Customization Tutorials**: How to configure complex rules
- **Season Mode Guide**: Setting up linked tournaments
- **FAQ**: Common questions and troubleshooting

### 11.2 Developer Documentation

- **Database Schema**: Full ER diagram and table descriptions
- **API Reference**: Internal functions and service layer
- **Algorithm Documentation**: Simulation, fixture generation logic
- **Component Architecture**: UI component tree and props
- **State Management**: Redux/Zustand structure

### 11.3 Contributing Guide (If Open Source)

- **Code Style**: Linting rules, formatting
- **Contribution Workflow**: Pull request process
- **Feature Requests**: How to propose new formats
- **Bug Reports**: Issue template

---

## 12. Future Expansion Ideas

### 12.1 Additional Formats

- **Gauntlet Format**: One team faces all others in succession
- **King of the Hill**: Defend throne against challengers
- **Battle Royale**: Multi-team simultaneous elimination
- **Ladder System**: Challenge teams above you

### 12.2 Platform Expansion

- **Web Version**: Browser-based version with sync
- **Desktop App**: Windows/Mac/Linux via Electron
- **API**: External access for third-party tools
- **Multiplayer**: Collaborative season management

### 12.3 Monetization (Optional)

- **Premium Features**: Cloud sync, unlimited templates
- **Team Packs**: Official licensed team databases
- **Ad-Free**: Remove ads with one-time purchase
- **Tournament Slots**: Free tier limits active tournaments

---

## Summary

This tournament simulation app is designed as a **highly flexible, esports-focused platform** where:

✅ **Everything is customizable** - No fixed team counts, fully configurable rules
✅ **Modular by design** - Each format works independently
✅ **Multi-tournament support** - Run complex season ecosystems
✅ **Unlimited scaling** - 2 to 1000+ teams, any format
✅ **Esports-ready** - BO3/BO5 series, Swiss systems, modern formats
✅ **User-friendly** - Intuitive UI for complex configurations

**Next Immediate Steps:**

1. Set up project structure and database
2. Implement Phase 1 (Core Foundation)
3. Build simple league format first
4. Iterate with user feedback
5. Progressively add formats

**Key Success Metrics:**

- Tournament creation time < 2 minutes
- Simulation speed > 20 matches/second
- Support 100+ teams without performance degradation
- User can create any format they can imagine
