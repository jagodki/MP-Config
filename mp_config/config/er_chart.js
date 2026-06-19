erDiagram
	%% entities start
    PORTAL_CONFIG {
        int id PK
        string title
        string logo
        string toolTip
        string link
    }
    
    MAP_CONFIG {
        int id PK
        boolean zoom
        json orientation
        json mapView
        json mouseHover
    }
    
    PORTAL_FOOTER {
        int id PK
        json urls
    }
    
    MAIN_MENU {
        int id PK
        boolean expanded
        json title
    }
    
    SEARCH_BAR {
        int id PK
    }
    
    SEARCH_INTERFACE {
        int id PK
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
        int id PK
        string type
		json content
    }
    
    TREE {
        int id PK
        boolean highlightedFeatures
    }
    
    MOUSE_HOVER {
        int id PK
        int numFeaturesToShow
        string infoText
        boolean highlightOnHover
        json highlightVectorRulesPolygon
        json highlightVectorRulesPointLine
    }
    
    SERVICES {
        int id PK
        string configFilePath
    }
    
    SERVICE {
        int id PK
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
        int id PK
        string portalConfigId FK
        string filePath

    }
    
    LAYER {
        int id PK
        string name
        string url
        string typ
        string featureType
        string styleId FK
        json gfiAttributes
        json urlParameter
        boolean urlIsVisible
    }
    
   	LAYER_STYLE {
        int id PK
        string configFilePath
        json rules
    }
    
    ALERTING {
        int id PK
        string fetchBroadcastUrl
    }
    
    PROJECTION {
        int id PK
        string code
        string definition
    }
    
    PORTAL_LANGUAGE {
        int id PK
        boolean enabled
        string fallbackLanguage
        json languages
    }
    
    PORTAL_LOCALES {
        int id PK
        string languageCode
        json translations
    }
	
	HISTORY {
		int id PK
		string old_values
		string new_values
		string timestamp
	}
	
	%% entities end
	
    %% relationships
    PORTAL_CONFIG ||--|| MAP_CONFIG : "has"
    PORTAL_CONFIG ||--o| PORTAL_FOOTER : "has"
    PORTAL_CONFIG ||--o| MAIN_MENU : "has"
    PORTAL_CONFIG ||--o| TREE : "has"
    PORTAL_CONFIG ||--o{ MOUSE_HOVER : "has"
    PORTAL_CONFIG ||--|| LAYER_CONF : "has"
    PORTAL_CONFIG ||--o{ ALERTING : "has"
    PORTAL_CONFIG ||--o{ PROJECTION : "has"
    PORTAL_CONFIG ||--|| PORTAL_LANGUAGE : "has"
    PORTAL_CONFIG ||--|{ PORTAL_LOCALES : "has"
    PORTAL_CONFIG ||--o{ SERVICES : "has"
    
    MAIN_MENU ||--o| SEARCH_BAR : "contains"
    MAIN_MENU ||--o{ SECTION : "contains"
    SEARCH_BAR ||--|| SEARCH_INTERFACE : "uses"
    
    SERVICES ||--o{ SERVICE : "contains"
    SERVICE ||--o{ DATASET : "references"
    
    LAYER_CONF ||--o{ LAYER : "contains"
    LAYER ||--o{ DATASET : "references"
    LAYER ||--o{ LAYER_STYLE : "uses"