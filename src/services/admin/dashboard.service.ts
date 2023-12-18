import { PrismaClient } from "@prisma/client";

class DashboardService {
	prisma = new PrismaClient();

	async getAllUsersTier() {
		try {
			const Allusers = this.prisma.user.aggregate({
				_count: {
					userId: true,
				},
			});
			const NormalUsers = this.prisma.user.aggregate({
				_count: {
					userId: true,
				},
				where: {
					tierId: 1,
				},
			});
			const allUser = (await Allusers)._count.userId;
			const normalCustomer = (await NormalUsers)._count.userId;
			const LoyalCustomer =
				(await Allusers)._count.userId - normalCustomer;

			return {
				normalCustomer: (normalCustomer / allUser) * 100,
				LoyalCustomer: (LoyalCustomer / allUser) * 100,
			};
		} catch (e) {
			console.log(e);
			throw new Error("Error in getting all users tier");
		}
	}

	async getVenueTypes() {
		try {
			const clubVenue = this.prisma.venue.aggregate({
				_count: {
					venueId: true,
				},
				where: {
					category: "Club",
				},
			});
			const barVenue = this.prisma.venue.aggregate({
				_count: {
					venueId: true,
				},
				where: {
					category: "Bar",
				},
			});
			const restaurantVenue = this.prisma.venue.aggregate({
				_count: {
					venueId: true,
				},
				where: {
					category: "Restaurant",
				},
			});
			const clubVenueCount = (await clubVenue)._count.venueId;
			const barVenueCount = (await barVenue)._count.venueId;
			const restaurantVenueCount = (await restaurantVenue)._count.venueId;
			const totalVenueCount =
				clubVenueCount + barVenueCount + restaurantVenueCount;
			return {
				clubVenue: (clubVenueCount / totalVenueCount) * 100,
				barVenue: (barVenueCount / totalVenueCount) * 100,
				restaurantVenue: (restaurantVenueCount / totalVenueCount) * 100,
			};
		} catch (e) {
			console.log(e);
			throw new Error("Error in getting venue types");
		}
	}

	async getBusinessCount() {
		try {
			const businessCount = this.prisma.business_user.aggregate({
				_count: {
					businessId: true,
				},
			});
			return { businessCount: (await businessCount)._count.businessId };
		} catch (e) {
			console.log(e);
			throw new Error("Error in getting business count");
		}
	}
	async getNumberOfReciept() {
		try {
			const getNumberOfReciept = this.prisma.reservation.aggregate({
				_count: {
					isPaidDeposit: true,
				},
				where: {
					isPaidDeposit: "Completed",
				},
			});
			return (await getNumberOfReciept)._count.isPaidDeposit;
		} catch (e) {
			console.log(e);
			throw new Error("Error in getting number of reciept");
		}
	}
}

export default new DashboardService();
