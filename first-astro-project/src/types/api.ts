export type ApiSpaceXResponse = {
    docs:          Doc[];
    totalDocs:     number;
    offset:        number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      number;
}

export type Doc = {
    fairings:              Fairings | null;
    links:                 Links;
    static_fire_date_utc:  null;
    static_fire_date_unix: null;
    net:                   boolean;
    window:                null;
    rocket:                Rocket;
    success:               null;
    failures:              any[];
    details:               null;
    crew:                  any[];
    ships:                 any[];
    capsules:              any[];
    payloads:              Payload[];
    launchpad:             Launchpad;
    flight_number:         number;
    name:                  string;
    date_utc:              Date;
    date_unix:             number;
    date_local:            Date;
    date_precision:        DatePrecision;
    upcoming:              boolean;
    cores:                 Core[];
    auto_update:           boolean;
    tbd:                   boolean;
    launch_library_id:     null | string;
    id:                    string;
}

export type Core = {
    core:            null | string;
    flight:          number | null;
    gridfins:        boolean | null;
    legs:            boolean | null;
    reused:          boolean | null;
    landing_attempt: null;
    landing_success: null;
    landing_type:    null;
    landpad:         null;
}

export enum DatePrecision {
    Day = "day",
    Hour = "hour",
    Month = "month",
}

export type Fairings = {
    reused:           null;
    recovery_attempt: null;
    recovered:        null;
    ships:            any[];
}

export type Launchpad = {
    images:           Images;
    name:             LaunchpadName;
    full_name:        FullName;
    locality:         Locality;
    region:           Region;
    latitude:         number;
    longitude:        number;
    launch_attempts:  number;
    launch_successes: number;
    rockets:          IDElement[];
    timezone:         Timezone;
    launches:         string[];
    status:           Status;
    details:          string;
    id:               PurpleID;
}

export enum FullName {
    CapeCanaveralSpaceForceStationSpaceLaunchComplex40 = "Cape Canaveral Space Force Station Space Launch Complex 40",
    KennedySpaceCenterHistoricLaunchComplex39A = "Kennedy Space Center Historic Launch Complex 39A",
    VandenbergSpaceForceBaseSpaceLaunchComplex4E = "Vandenberg Space Force Base Space Launch Complex 4E",
}

export enum PurpleID {
    The5E9E4501F509094Ba4566F84 = "5e9e4501f509094ba4566f84",
    The5E9E4502F509092B78566F87 = "5e9e4502f509092b78566f87",
    The5E9E4502F509094188566F88 = "5e9e4502f509094188566f88",
}

export type Images = {
    large: string[];
}

export enum Locality {
    CapeCanaveral = "Cape Canaveral",
    VandenbergSpaceForceBase = "Vandenberg Space Force Base",
}

export enum LaunchpadName {
    CcsfsSlc40 = "CCSFS SLC 40",
    KscLc39A = "KSC LC 39A",
    VafbSlc4E = "VAFB SLC 4E",
}

export enum Region {
    California = "California",
    Florida = "Florida",
}

export enum IDElement {
    The5E9D0D95Eda69973A809D1Ec = "5e9d0d95eda69973a809d1ec",
    The5E9D0D95Eda69974Db09D1Ed = "5e9d0d95eda69974db09d1ed",
}

export enum Status {
    Active = "active",
}

export enum Timezone {
    AmericaLosAngeles = "America/Los_Angeles",
    AmericaNewYork = "America/New_York",
}

export type Links = {
    patch:      Patch;
    reddit:     Reddit;
    flickr:     Flickr;
    presskit:   null;
    webcast:    null | string;
    youtube_id: null | string;
    article:    null;
    wikipedia:  null;
}

export type Flickr = {
    small:    any[];
    original: any[];
}

export type Patch = {
    small: null;
    large: null;
}

export type Reddit = {
    campaign: null;
    launch:   null;
    media:    null;
    recovery: null;
}

export type Payload = {
    dragon:             Dragon;
    name:               string;
    type:               string;
    reused:             boolean;
    launch:             string;
    customers:          string[];
    norad_ids:          any[];
    nationalities:      Country[];
    manufacturers:      string[];
    mass_kg:            number | null;
    mass_lbs:           number | null;
    orbit:              string;
    reference_system:   string;
    regime:             string;
    longitude:          null;
    semi_major_axis_km: null;
    eccentricity:       null;
    periapsis_km:       null;
    apoapsis_km:        null;
    inclination_deg:    null;
    period_min:         null;
    lifespan_years:     null;
    epoch:              null;
    mean_motion:        null;
    raan:               null;
    arg_of_pericenter:  null;
    mean_anomaly:       null;
    id:                 string;
}

export type Dragon = {
    capsule:           null;
    mass_returned_kg:  null;
    mass_returned_lbs: null;
    flight_time_sec:   null;
    manifest:          null;
    water_landing:     null;
    land_landing:      null;
}

export enum Country {
    UnitedStates = "United States",
}

export type Rocket = {
    height:           Diameter;
    diameter:         Diameter;
    mass:             Mass;
    first_stage:      FirstStage;
    second_stage:     SecondStage;
    engines:          Engines;
    landing_legs:     LandingLegs;
    payload_weights:  PayloadWeight[];
    flickr_images:    string[];
    name:             RocketName;
    type:             RocketType;
    active:           boolean;
    stages:           number;
    boosters:         number;
    cost_per_launch:  number;
    success_rate_pct: number;
    first_flight:     Date;
    country:          Country;
    company:          Company;
    wikipedia:        string;
    description:      string;
    id:               IDElement;
}

export enum Company {
    SpaceX = "SpaceX",
}

export type Diameter = {
    meters: number;
    feet:   number;
}

export type Engines = {
    isp:              ISP;
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    number:           number;
    type:             EnginesType;
    version:          Version;
    layout:           Layout;
    engine_loss_max:  number;
    propellant_1:     Propellant1;
    propellant_2:     Propellant2;
    thrust_to_weight: number;
}

export type ISP = {
    sea_level: number;
    vacuum:    number;
}

export enum Layout {
    Octaweb = "octaweb",
}

export enum Propellant1 {
    LiquidOxygen = "liquid oxygen",
}

export enum Propellant2 {
    RP1Kerosene = "RP-1 kerosene",
}

export type Thrust = {
    kN:  number;
    lbf: number;
}

export enum EnginesType {
    Merlin = "merlin",
}

export enum Version {
    The1D = "1D+",
}

export type FirstStage = {
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number;
}

export type LandingLegs = {
    number:   number;
    material: Material;
}

export enum Material {
    CarbonFiber = "carbon fiber",
}

export type Mass = {
    kg: number;
    lb: number;
}

export enum RocketName {
    Falcon9 = "Falcon 9",
    FalconHeavy = "Falcon Heavy",
}

export type PayloadWeight = {
    id:   PayloadWeightID;
    name: PayloadWeightName;
    kg:   number;
    lb:   number;
}

export enum PayloadWeightID {
    Gto = "gto",
    Leo = "leo",
    Mars = "mars",
    Pluto = "pluto",
}

export enum PayloadWeightName {
    GeosynchronousTransferOrbit = "Geosynchronous Transfer Orbit",
    LowEarthOrbit = "Low Earth Orbit",
    MarsOrbit = "Mars Orbit",
    PlutoOrbit = "Pluto Orbit",
}

export type SecondStage = {
    thrust:           Thrust;
    payloads:         Payloads;
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number;
}

export type Payloads = {
    composite_fairing: CompositeFairing;
    option_1:          Option1;
}

export type CompositeFairing = {
    height:   Diameter;
    diameter: Diameter;
}

export enum Option1 {
    Dragon = "dragon",
}

export enum RocketType {
    Rocket = "rocket",
}
