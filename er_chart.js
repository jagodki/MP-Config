%% Mermaid ER-Diagramm für das Masterportal-Datenbankschema

%% Konfiguration der Diagrammeigenschaften
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ffdfd3', 'edgeLabelBackground':'#fff', 'tertiaryColor': '#dcd0ff', 'primaryTextColor': '#000', 'secondaryColor': '#f5f5f5'}}}%%

erDiagram
    %% Entitäten
    PORTAL_CONFIG ||--o{ MAP_CONFIG : "hat"
    PORTAL_CONFIG ||--o{ PORTAL_FOOTER : "hat"
    PORTAL_CONFIG ||--o{ MAIN_MENU : "hat"
    PORTAL_CONFIG ||--o{ TREE : "hat"
    PORTAL_CONFIG ||--o{ MOUSE_HOVER : "hat"
    
    MAIN_MENU ||--o{ SEARCH_BAR : "enthält"
    MAIN_MENU ||--o{ SECTION : "enthält"
    SEARCH_BAR ||--o{ SEARCH_INTERFACE : "nutzt"
    
    SERVICES ||--o{ SERVICE : "enthält"
    SERVICE ||--o{ DATASET : "referenziert"
    
    LAYER_CONF ||--o{ LAYER : "enthält"
    LAYER ||--o{ DATASET : "referenziert"
    LAYER ||--o{ STYLE : "nutzt"
    
    %% Entitäten-Details
    PORTAL_CONFIG {
        string id PK
        string title
        string logo
        string toolTip
        string link
    }
    
    MAP_CONFIG {
        string id PK
        boolean zoom
        json orientation
        json mapView
        json mouseHover
    }
    
    PORTAL_FOOTER {
        string id PK
        json urls
    }
    
    MAIN_MENU {
        string id PK
        boolean expanded
        json title
    }
    
    SEARCH_BAR {
        string id PK
    }
    
    SEARCH_INTERFACE {
        string id PK
        string type
        string serviceId FK
        int minChars
        int limit
        string lang
        float lat
        float lon
        string bbox
    }
    
    SECTION {
        string id PK
        string type
    }
    
    TREE {
        string id PK
        boolean highlightedFeatures
    }
    
    MOUSE_HOVER {
        string id PK
        int numFeaturesToShow
        string infoText
        boolean highlightOnHover
        json highlightVectorRulesPolygon
        json highlightVectorRulesPointLine
    }
    
    SERVICES {
        string id PK
    }
    
    SERVICE {
        string id PK
        string name
        string url
        string typ
        string featureType
        string outputFormat
        string version
        string featureNS
        string gfiAttributes
        string gfiTheme
        string layerAttribution
        string legendURL
        string hitTolerance
        boolean urlIsVisible
    }
    
    DATASET {
        string md_id PK
        string csw_url
        string show_doc_url
        string rs_id
        string md_name
        string bbox
        json kategorie_opendata
        json kategorie_inspire
        string kategorie_organisation
    }
    
    LAYER_CONF {
        string id PK
    }
    
    LAYER {
        string id PK
        string name
        string url
        string typ
        string featureType
        string styleId FK
        json gfiAttributes
        json urlParameter
        boolean urlIsVisible
    }
    
    STYLE {
        string id PK
        json rules
    }
    
    %% Beziehungen
    SERVICE ||--|{ DATASET : "referenziert"
    LAYER ||--|{ DATASET : "referenziert"
    LAYER ||--|| STYLE : "nutzt"
    SEARCH_INTERFACE ||--|| SERVICE : "nutzt"