import { addOns, packages, serviceAreas } from "@/lib/data";

export type QuoteInput = {
  packageId: string;
  guests: number;
  durationMinutes: number;
  addOnIds: string[];
  postalCode: string;
};

export function calculateTravelFee(postalCode: string) {
  const prefix = postalCode.slice(0, 2);
  return serviceAreas.find((area) => area.postalPrefixes.includes(prefix))?.travelFee ?? 1600;
}

export function calculateQuote(input: QuoteInput) {
  const selectedPackage = packages.find((entry) => entry.id === input.packageId);

  if (!selectedPackage) {
    throw new Error("Unknown package selected.");
  }

  const extraGuests = Math.max(0, input.guests - selectedPackage.guestRange[1]);
  const guestFee = extraGuests * 28;
  const extraDuration = Math.max(0, input.durationMinutes - selectedPackage.durationMinutes);
  const durationFee = Math.ceil(extraDuration / 30) * 650;
  const addOnFee = input.addOnIds.reduce((sum, id) => {
    const match = addOns.find((item) => item.id === id);
    return sum + (match?.price ?? 0);
  }, 0);
  const travelFee = calculateTravelFee(input.postalCode);
  const total = selectedPackage.basePrice + guestFee + durationFee + addOnFee + travelFee;

  return {
    basePrice: selectedPackage.basePrice,
    guestFee,
    durationFee,
    addOnFee,
    travelFee,
    total
  };
}
