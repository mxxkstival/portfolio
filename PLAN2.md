# Web Portfolio Planning Document v2 (PLAN2.md)
**See Yoon Soon**
*Personal Portfolio Archive — Creator’s Notebook Edition*

---

## 🛠 주요 수정 및 보강 사항 (Feedback & Revisions)

1. **디자인 컨셉 강화 ("iPhone Memo × Creator's Notebook")**
   - 지나치게 평범한 모던 웹사이트 느낌에서 벗어나, **종이 질감, 격자/줄노트 배경 패턴, 스티커/포스트잇 스타일 카드, 둥근 메모장 컨테이너** 등을 활용하여 '작업 노트' 감성을 극대화.
   - 폰트/간격: 손글씨 스티커 포인트 폰트 및 넉넉한 레이아웃 여백 확보.

2. **여백 및 가독성 개선 (Layout & Spacing)**
   - 각 섹션(About, Projects, Creative Practice 등) 간의 **Vertical Padding을 최소 100px~120px 이상 확보**.
   - 섹션 헤더(카테고리 소제목 + 한 줄 설명)와 하위 컴포넌트/카드 사이의 **Gap을 32px~48px로 확대**하여 시각적 답답함 해소.

3. **피드백 반영 (이미지 속 요청사항)**
   - **Hero Section / Footer**: 마지막 수정 일자(`Last updated: 2026.08.03`) 및 상태 스티커(`Currently: Building my archive ☁️`) 포인트 명확히 복원.
   - **Today's Sticker**: 전체 리스트 노출이 아닌, **하나의 스티커만 핀(Pin)처럼 렌더링되거나 클릭/새로고침 시 랜덤 노출**되는 컴포넌트로 기획 수정.
   - **Projects 타임라인 내용 변경 및 연도별 항목 업데이트**:
     - `2023`: Busan Citizen's Hall (부산시민회관)
     - `2024`: Busan Biennale 2024 (부산비엔날레 2024)
     - `2025`: Busan Sea Art Festival 2025 (바다미술제 2025)
     - `2026`: Busan International Film Festival (부산국제영화제 2026)

---

## 0. Brand Concept & Tone

* **Brand Name**: See Yoon Soon
* **Identity**: "보고, 기록하고, 만드는 사람의 작업 노트"
* **Visual Key**:
  - `Paper Cream` (`#FAF7F0`): 메인 배경 (노트 종이 질감 느낌)
  - `Mist Blue` (`#B9DDF2`): 포인트 바다/공기 스티커 Accent
  - `Ink Navy` (`#263746`): 잉크 펜 텍스트 컬러
  - `Soft Sage` (`#A9C3B1`): 포스트잇/하이라이트 태그
  - `Dotted Grid`: subtle background pattern (메모장 격자선)

---

## 1. UI & Spacing System (가독성 보완)

```text
[ Global Spacing Standard ]
- Section to Section Margin: 120px
- Section Header to Content Gap: 40px
- Card Internal Padding: 32px
- Container Max Width: 1140px (여유로운 중앙 정렬)
- Card Border Radius: 16px ~ 24px (아이폰 위젯/메모장 느낌)
- Card Shadow: 0 8px 24px rgba(38, 55, 70, 0.04) (은은한 종이 그림자)
```

---

## 2. Navigation Structure

```text
SEE YOON SOON
│
├── 01. About Me          (인사말 + 미모티콘 + 단일 Today's Sticker + 관심사)
├── 02. Projects          (2023~2026 경력 및 프로젝트 타임라인)
├── 03. Creative Practice (Photography / Independent Publishing / Writing)
├── 04. On Going          (진행 중인 프로젝트 & 학습)
├── 05. Archive           (포트폴리오, CV, 다운로드)
└── 06. Contact           (이메일 & SNS)
```

---

## 03. Section-by-Section Detailed Plan

### 01. Hero & About Me
* **Layout**: 메모장 위젯 스타일 2열 레이아웃 + 넉넉한 상하 패딩 (Top 120px)

* **Hero Title Box (Left)**:
  - Header: `Personal Archive`
  - Big Title: `See Yoon Soon`
  - Subtitle: "문화예술 현장에서 사람과 콘텐츠를 연결하며, 경험을 기록하고 전달하는 과정을 담아내는 개인 아카이브."
  - Signature Tags: `#PR&Marketing` `#Operation` `#Culture` `#Archive` (클릭 시 이동)
  - CTA Buttons: `[View Projects]` `[Contact]`

* **Widget Profile Card (Right - Memo Pad Style)**:
  - ☁️ Floating Cloud Motif
  - 🧑🏻‍💻 Memoji Avatar (작업 중인 모습)
  - Status Tag: `● Film festival mode` (Today's Sticker - 1개만 단일 노출!)
  - Intro Card Snippet:
    > **Hello, I'm Siyoon.**
    > Culture × Communication × Archive

* **About Me Content Block (Below)**:
  - **Today's Sticker ☁️ (컴포넌트 수정)**:
    - *구현*: 전체 리스트 박스가 아닌, **다이어리 포스트잇 스티커** 모양의 단일 카드.
    - *동작*: 페이지 접속 시 랜덤 1개 표출 or 배지 클릭 시 다음 스티커로 슬라이드.
    - *내용 옵션*: `☕ coffee & planning` / `🎬 film festival mode` / `📚 archive day` / `✏️ creating something` / `🏊 swimming break`
  - **Current Interests**:
    - 스티커 형태의 4개 태그 (`📷 Photography`, `📚 Independent Publishing`, `🎬 Film & Exhibition`, `✍️ Writing`)

---

### 02. Projects (타임라인 수정)

* **Section Layout**:
  - Title: **PROJECTS**
  - Subtitle: "경험과 성과를 흐름으로 보여주는 작업 기록" (Margin Bottom: 48px)

* **Timeline Structure & Content**:

  1. **2023 | Busan Citizen's Hall**
     - *Role*: PR & Marketing / Operation
     - *Tags*: `#Culture` `#PR&Marketing`
     - *Description*: 부산시민회관 공연·전시 운영 및 관람객 홍보 지원
     - *Outcome*: 공간 운영 프로세스 습득 및 시민 대상 문화 홍보 콘텐츠 제작

  2. **2024 | Busan Biennale 2024**
     - *Role*: Operation & Communication
     - *Tags*: `#Culture` `#Operation`
     - *Description*: 2024 부산비엔날레 현장 운영 및 통역/커뮤니케이션 지원
     - *Outcome*: 대규모 국제 현대미술 행사 운영 및 관람객 현장 동선 관리

  3. **2025 | Busan Sea Art Festival 2025**
     - *Role*: PR & Marketing / Operation
     - *Tags*: `#PR&Marketing` `#Culture`
     - *Description*: 바다미술제 2025 홍보물 제작 관리, 가이드맵 기획, 웹사이트 운영 협업
     - *Outcome*: 35만 명 규모 행사 성공적 운영 참여, 정보 접근성 획기적 개선

  4. **2026 | Busan International Film Festival**
     - *Role*: Ticketing Operation / Guest Relations
     - *Tags*: `#Operation` `#Culture`
     - *Description*: 부산국제영화제 티켓팅 시스템 운영 및 관객 서비스 전달
     - *Outcome*: 원활한 관객 매칭 및 현장 응대 최적화

  5. **Now | Personal Archive Project**
     - *Role*: Digital Portfolio Development
     - *Tags*: `#Archive` `#Design`
     - *Description*: 개인 브랜딩과 작업물을 담는 아카이브 웹사이트 기획 및 제작

* **Card UI Note**: 각 타임라인 카드는 메모지의 타임스탬프 느낌을 주며, 카드 간 Gap을 32px로 넓혀 구분이 명확해지도록 함.

---

### 03. Creative Practice

* **Section Concept**: "직무 외에서도 보이는 창작 역량" (독립된 3개의 노트를 펼쳐놓은 카드 레이아웃)
* **Gap**: Cards Margin 24px, Section Top/Bottom Padding 120px

1. **Photography**
   - *Description*: 사진으로 순간과 공간을 기록합니다.
   - *Elements*: 갤러리 썸네일, 촬영 프로젝트 기록
2. **Independent Publishing**
   - *Description*: 아이디어를 콘텐츠로 완성합니다.
   - *Elements*: 독립출판 잡지 기획/제작 과정, 편집 디자인
3. **Writing**
   - *Description*: 생각과 경험을 글과 에세이로 남깁니다.
   - *Elements*: 비평, 리뷰, 작업 일지

---

### 04. On Going

* **Section Layout**: 진행 중인 카드 3종 (프로그레스 바 포함)
* **Status Details**:
  - **Project 01**: See Yoon Soon (Personal Portfolio Website) `[ progress: 70% ]`
  - **Project 02**: Language Growth (OPIc IH Project) `[ In Progress ]`
  - **Project 03**: Culture Archive (문화예술 콘텐츠 기록 및 트래킹) `[ Continuous ]`

---

### 05. Archive & Contact (마지막 포인트 복원)

* **Archive Section**:
  - 다운로드 버튼 (`[View Online]`, `[Download PDF]`)과 문서 카드 (Portfolio, CV, 제작물, 프로젝트 문서) 정돈.
* **Contact Section**:
  - 이메일 문의 및 SNS 링크 (Instagram, Blog, LinkedIn)
* **Footer Point Element (삭제되었던 부분 명확히 복원)**:
  - `Last updated: 2026.08.03`
  - `Currently: Building my archive ☁️`
  - 하단에 소형 메모 스티커 형태로 고정 배치.

---

## 4. Summary of Key Fixes

| 구분 | 이전 상태 | Plan 2 수정안 |
| :--- | :--- | :--- |
| **디자인 톤앤매너** | 정형화된 일반 포트폴리오 웹사이트 느낌 | 격자 배경 + 메모장 위젯 + 스티커 핀으로 노트 감성 강화 |
| **여백 (Spacing)** | 섹션 및 글자/컴포넌트 간격이 좁아 답답함 | 섹션 간 120px, 카드 간 32~48px로 여백 확대하여 가독성 개선 |
| **Today's Sticker** | 5개 리스트가 통째로 노출됨 | 메모지에 붙은 **단 1개의 스티커**만 표출 (랜덤/랜더링) |
| **Projects 경력** | 2025~2026년 3개 프로젝트만 표시 | **2023, 2024, 2025, 2026 4개 연도 풀 경력** 반영 |
| **Footer 포인트** | 업데이트 날짜 및 상태 문구 삭제됨 | **Last updated: 2026.08.03** & **Status 문구** 복원 |

