import { Venue_credit_card } from "@prisma/client";
import { IVenueRepository } from ".";
import {
  OpeningHourUpdateRequest,
  VenueShowDBResponse,
  VenueUpdateRequest,
  VenueUpdateWebResponse,
  makeVenueUpdateWebResponse,
  CreditCardCreateRequest,
  VenuePromptPayShowDBResponse,
} from "../../controllers/feature1/models";

export interface IVenueService {
  updateVenue(
    businessId: number,
    data: VenueUpdateRequest,
    filename: string | null,
  ): Promise<VenueUpdateWebResponse>;

  getVenue(businessId: number): Promise<VenueShowDBResponse>;

  updateOpeningHours(businessId: number, data: OpeningHourUpdateRequest);

  updatePromptPay(businessId: number, promptPayNumber: number);

  createCreditCard(
    businessId: number,
    data: CreditCardCreateRequest,
  ): Promise<Venue_credit_card>;

  showCreditCard(
    businessId: number,
    creditCardId: number,
  ): Promise<Venue_credit_card | null>;

  listCreditCardsByBusinessId(
    businessId: number,
  ): Promise<Array<Venue_credit_card>>;

  deleteCreditCard(businessId: number, creditCardId: number): Promise<boolean>;

  showPromptPay(
    businessId: number,
  ): Promise<VenuePromptPayShowDBResponse | null>;
}

class VenueService implements IVenueService {
  constructor(readonly repository: IVenueRepository) {}

  async deleteCreditCard(
    businessId: number,
    creditCardId: number,
  ): Promise<boolean> {
    return this.repository.deleteCreditCardById(businessId, creditCardId);
  }

  async listCreditCardsByBusinessId(
    businessId: number,
  ): Promise<Array<Venue_credit_card>> {
    return this.repository.listCreditCardsByBusinessId(businessId);
  }

  async showCreditCard(
    businessId: number,
    creditCardId: number,
  ): Promise<Venue_credit_card | null> {
    return this.repository.getCreditCardById(businessId, creditCardId);
  }

  async createCreditCard(
    businessId: number,
    data: CreditCardCreateRequest,
  ): Promise<Venue_credit_card> {
    return this.repository.createCreditCard(businessId, data);
  }

  async updatePromptPay(businessId: number, promptPayNumber: number) {
    await this.repository.updatePromptPayByBusinessId(
      businessId,
      promptPayNumber,
    );
  }

  async getVenue(businessId: number): Promise<VenueShowDBResponse> {
    return this.repository.getVenueByBusinessId(businessId);
  }

  async updateVenue(
    businessId: number,
    data: VenueUpdateRequest,
    filename: string | null,
  ): Promise<VenueUpdateWebResponse> {
    const result = await this.repository.updateVenueByBusinessId(
      businessId,
      data,
      filename,
    );

    return makeVenueUpdateWebResponse(result);
  }

  async updateOpeningHours(businessId: number, data: OpeningHourUpdateRequest) {
    await this.repository.updateOpeningHours(businessId, data);
  }

  async showPromptPay(
    businessId: number,
  ): Promise<VenuePromptPayShowDBResponse | null> {
    return this.repository.showPromptPayByBusinessId(businessId);
  }
}

export default VenueService;
