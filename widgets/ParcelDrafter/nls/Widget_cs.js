// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/nls/strings":{_widgetLabel:"N\u00e1stroj pro n\u00e1vrh parcely",newTraverseButtonLabel:"Za\u010d\u00edt nov\u00fd polygonov\u00fd po\u0159ad",invalidConfigMsg:"Neplatn\u00e1 konfigurace",geometryServiceURLNotFoundMSG:"Nelze na\u010d\u00edst adresu URL slu\u017eby geometrie",editTraverseButtonLabel:"Upravit polygonov\u00fd po\u0159ad",mapTooltipForStartNewTraverse:"Nejprve vyberte bod na map\u011b nebo jej zadejte n\u00ed\u017ee",mapTooltipForEditNewTraverse:"Vyberte parcelu, kterou chcete upravit",
mapTooltipForUpdateStartPoint:"Kliknut\u00edm aktualizujete po\u010d\u00e1te\u010dn\u00ed bod",mapTooltipForScreenDigitization:"Kliknut\u00edm p\u0159id\u00e1te bod parcely",mapTooltipForUpdatingRotaionPoint:"Kliknut\u00edm aktualizujete bod rotace",mapTooltipForRotate:"Ta\u017een\u00edm ot\u00e1\u010dejte",mapTooltipForScale:"Ta\u017een\u00edm zm\u011b\u0148te m\u011b\u0159\u00edtko",backButtonTooltip:"Zp\u011bt",newTraverseTitle:"Nov\u00fd polygonov\u00fd po\u0159ad",editTraverseTitle:"Upravit polygonov\u00fd po\u0159ad",
clearingDataConfirmationMessage:"Zm\u011bny budou zru\u0161eny, chcete pokra\u010dovat?",unableToFetchParcelMessage:"Parcelu nelze na\u010d\u00edst.",unableToFetchParcelLinesMessage:"Parceln\u00ed linie nelze na\u010d\u00edst.",planSettings:{planSettingsTitle:"Nastaven\u00ed",directionOrAngleTypeLabel:"Typ sm\u011bru nebo \u00fahlu",directionOrAngleUnitsLabel:"Jednotky sm\u011bru nebo \u00fahlu",distanceAndLengthUnitsLabel:"Jednotky vzd\u00e1lenosti a d\u00e9lky",areaUnitsLabel:"Plo\u0161n\u00e9 jednotky",
circularCurveParameters:"Parametry kruhov\u00e9 k\u0159ivky",northAzimuth:"Azimut k severu",southAzimuth:"Azimut k jihu",quadrantBearing:"Kvadrant",radiusAndChordLength:"Polom\u011br a d\u00e9lka t\u011btivy",radiusAndArcLength:"Polom\u011br a d\u00e9lka kruhov\u00e9ho oblouku",expandGridTooltipText:"Rozbalit m\u0159\u00ed\u017eku",collapseGridTooltipText:"Sbalit m\u0159\u00ed\u017eku",zoomToLocationTooltipText:"P\u0159ibl\u00ed\u017eit na polohu",onScreenDigitizationTooltipText:"Digitalizovat",updateRotationPointTooltipText:"Aktualizovat bod rotace"},
traverseSettings:{bearingLabel:"Azimut",lengthLabel:"D\u00e9lka",radiusLabel:"Polom\u011br",noMiscloseCalculated:"Z\u00e1v\u011brov\u00e1 chyba nebyla vypo\u010dtena",traverseMiscloseBearing:"Sm\u011br z\u00e1v\u011brov\u00e9 chyby",traverseAccuracy:"P\u0159esnost",accuracyHigh:"Vysok\u00e1",traverseDistance:"Vzd\u00e1lenost z\u00e1v\u011brov\u00e9 chyby",traverseMiscloseRatio:"Pom\u011br z\u00e1v\u011brov\u00e9 chyby",traverseStatedArea:"Uveden\u00e1 oblast",traverseCalculatedArea:"Vypo\u010dten\u00e1 oblast",
addButtonTitle:"P\u0159idat",deleteButtonTitle:"Odebrat"},parcelTools:{rotationToolLabel:"\u00dahel",scaleToolLabel:"M\u011b\u0159\u00edtko"},newTraverse:{invalidBearingMessage:"Neplatn\u00fd sm\u011br",invalidLengthMessage:"Neplatn\u00e1 d\u00e9lka",invalidRadiusMessage:"Neplatn\u00fd polom\u011br",negativeLengthMessage:"Platn\u00e9 pouze pro k\u0159ivky",enterValidValuesMessage:"Zadejte platn\u00e9 hodnoty.",enterValidParcelInfoMessage:"Zadejte platn\u00e9 informace o parcele, kter\u00e9 se ulo\u017e\u00ed.",
unableToDrawLineMessage:"Linii nelze nakreslit.",invalidEndPointMessage:"Neplatn\u00fd koncov\u00fd bod, linii nelze nakreslit."},planInfo:{requiredText:"(povinn\u00e9)",optionalText:"(voliteln\u00e9)",parcelNamePlaceholderText:"N\u00e1zev parcely",parcelDocumentTypeText:"Typ dokumentu",planNamePlaceholderText:"N\u00e1zev pl\u00e1nu",cancelButtonLabel:"Storno",saveButtonLabel:"Ulo\u017eit",saveNonClosedParcelConfirmationMessage:"Zadan\u00e1 parcela nen\u00ed uzav\u0159ena, chcete p\u0159esto pokra\u010dovat a ulo\u017eit pouze parceln\u00ed linie?",
unableToCreatePolygonParcel:"Polygon parcely nelze vytvo\u0159it.",unableToSavePolygonParcel:"Polygon parcely nelze ulo\u017eit.",unableToSaveParcelLines:"Parceln\u00ed linie nelze ulo\u017eit.",unableToUpdateParcelLines:"Parceln\u00ed linie nelze aktualizovat.",parcelSavedSuccessMessage:"Parcela byla \u00fasp\u011b\u0161n\u011b ulo\u017eena.",parcelDeletedSuccessMessage:"Parcela byla \u00fasp\u011b\u0161n\u011b odstran\u011bna.",parcelDeleteErrorMessage:"Chyba p\u0159i odstra\u0148ov\u00e1n\u00ed parcely.",
enterValidParcelNameMessage:"Zadejte platn\u00fd n\u00e1zev parcely.",enterValidPlanNameMessage:"Zadejte platn\u00fd n\u00e1zev pl\u00e1nu.",enterValidDocumentTypeMessage:"Neplatn\u00fd typ dokumentu",enterValidStatedAreaNameMessage:"Zadejte platn\u00fd n\u00e1zev uveden\u00e9 oblasti."},xyInput:{explanation:"V sou\u0159adnicov\u00e9m syst\u00e9mu va\u0161\u00ed vrstvy parcel"},_localized:{}}});