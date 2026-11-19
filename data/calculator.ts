/**
 * CALCULATOR CONFIGURATION & VERIFIED FORMULA PLACEHOLDER
 *
 * NOTE: Care4Solar strictly avoids fabricated pricing, generation, or payback guarantees.
 * This configuration holds editable input categories, defaults, and formula placeholders
 * for when verified company engineering assumptions are integrated.
 */

export interface CalculatorConfig {
  roofTypes: string[];
  systemTypes: string[];
  billOffsetOptions: number[];
  formulaParameters: {
    // Editable placeholders for future verified engineering formulas:
    // e.g. unitsPerKwpPerMonth: null,
    // estimatedCostPerKwp: null,
    notes: string;
  };
}

export const calculatorConfig: CalculatorConfig = {
  roofTypes: [
    "Flat Concrete (RCC Terrace)",
    "Sloped Metal / Tin Sheet (Pitched)",
    "Clay Tile / Mangalore Tile",
    "Elevated / Rooftop Pergola Needed",
    "Open Ground / Parking Canopy",
    "Other Roof Architecture",
  ],
  systemTypes: [
    "On-Grid (Standard Grid-Tied)",
    "Hybrid (Solar + Battery Backup Ready)",
    "Off-Grid (Self-Sustaining Remote)",
    "Unsure / Needs Engineering Consultation",
  ],
  billOffsetOptions: [25, 50, 75, 100],
  formulaParameters: {
    notes:
      "Formulas are strictly deactivated until officially verified engineering calculation benchmarks and local solar irradiance parameters are approved by Care4Solar.",
  },
};
