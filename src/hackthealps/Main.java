package hackthealps;

import static spark.Spark.*;

import java.util.ArrayList;
import spark.Filter;



public class Main {

	static final int USERS_NR = 4;
	static ArrayList<User> users = new ArrayList<User>();
	static ArrayList<UserWeekly> users_weekly = new ArrayList<UserWeekly>();
	static ArrayList<UserMonthly> users_monthly = new ArrayList<UserMonthly>();
	static ArrayList<UserYearly> users_yearly = new ArrayList<UserYearly>();

	public static void main(String[] args) {

		User user_tmp;
		int id_tmp = 1;
		for (int i = 0; i < USERS_NR; i++) {
			user_tmp = new User(id_tmp);
			users.add(user_tmp);
			id_tmp++;
		}
		
		UserWeekly user_weekly_tmp;
		id_tmp = 1;
		for (int i = 0; i < USERS_NR; i++) {
			user_weekly_tmp = new UserWeekly(id_tmp);
			users_weekly.add(user_weekly_tmp);
			id_tmp++;
		}
		
		UserMonthly user_monthly_tmp;
		id_tmp = 1;
		for (int i = 0; i < USERS_NR; i++) {
			user_monthly_tmp = new UserMonthly(id_tmp);
			users_monthly.add(user_monthly_tmp);
			id_tmp++;
		}
		
		UserYearly user_yearly_tmp;
		id_tmp = 1;
		for (int i = 0; i < USERS_NR; i++) {
			user_yearly_tmp = new UserYearly(id_tmp);
			users_yearly.add(user_yearly_tmp);
			id_tmp++;
		}
		
		
        after((Filter) (request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "GET");
        });

		get("/fingerprint/person/:id", (req, res) -> {
			int id = Integer.parseInt(req.params(":id"));
			User user = getUserById(id);
			if (user != null) {
				
				return user;
			}
			res.status(400);
			return new ResponseError("No user with id %s' found", req.params(":id"));
		}, Utils.json());
		


		get("/fingerprint/person/weekly/:id", (req, res) -> {
			int id = Integer.parseInt(req.params(":id"));
			UserWeekly user_weekly = getUserWeeklyById(id);
			if (user_weekly != null) {
				
				return user_weekly;
			}
			res.status(400);
			return new ResponseError("No user with id %s' found", req.params(":id"));
		}, Utils.json());
		
		get("/fingerprint/person/monthly/:id", (req, res) -> {
			int id = Integer.parseInt(req.params(":id"));
			UserMonthly user_monthly = getUserMonthlyById(id);
			if (user_monthly != null) {
				
				return user_monthly;
			}
			res.status(400);
			return new ResponseError("No user with id %s' found", req.params(":id"));
		}, Utils.json());
		
		get("/fingerprint/person/yearly/:id", (req, res) -> {
			int id = Integer.parseInt(req.params(":id"));
			UserYearly user_yearly = getUserYearlyById(id);
			if (user_yearly != null) {
				
				return user_yearly;
			}
			res.status(400);
			return new ResponseError("No user with id %s' found", req.params(":id"));
		}, Utils.json());
		
		
//		http://efa.sta.bz.it/apb/XML_TRIP_REQUEST2/itdDate='23/09/2018'&itdTime='08:00'&origin='Lana'&destination='Bolzano'
//		http://efa.sta.bz.it/apb/XML_TRIP_REQUEST2?language=de
		get("/test", (req, res) -> {
			//TODO to find out how to call this WS
			String request = "http://efa.sta.bz.it/apb/XML_TRIP_REQUEST2/itdDate='23/09/2018'"
					+ "&itdTime='08:00'"
					+ "&origin='Lana'&"
					+ "destination='Bolzano'&locationServerActive=1&name_test";
				
			
			
			res.status(400);
			return new ResponseError("No user with id %s' found", req.params(":id"));
		}, Utils.json());

	}

	private static User getUserById(int id) {
		User user = null;
		ArrayList<User> competitors = new ArrayList<User>();
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).id==id) {
				user = users.get(i);
			}
			else {
				competitors.add(users.get(i));
			}
			
		}
		if (user!=null) {
			user.competitors = competitors;
			return user;
		}
		return null;
	}
	
	private static UserWeekly getUserWeeklyById(int id) {
		UserWeekly user = null;
		ArrayList<UserWeekly> competitors = new ArrayList<UserWeekly>();
		for (int i = 0; i < users_weekly.size(); i++) {
			if (users_weekly.get(i).id==id) {
				user = users_weekly.get(i);
			}
			else {
				competitors.add(users_weekly.get(i));
			}
			
		}
		if (user!=null) {
			user.competitors = competitors;
			return user;
		}
		return null;
	}
	
	private static UserMonthly getUserMonthlyById(int id) {
		UserMonthly user = null;
		ArrayList<UserMonthly> competitors = new ArrayList<UserMonthly>();
		for (int i = 0; i < users_monthly.size(); i++) {
			if (users_monthly.get(i).id==id) {
				user = users_monthly.get(i);
			}
			else {
				competitors.add(users_monthly.get(i));
			}
			
		}
		if (user!=null) {
			user.competitors = competitors;
			return user;
		}
		return null;
	}
	
	private static UserYearly getUserYearlyById(int id) {
		UserYearly user = null;
		ArrayList<UserYearly> competitors = new ArrayList<UserYearly>();
		for (int i = 0; i < users_yearly.size(); i++) {
			if (users_yearly.get(i).id==id) {
				user = users_yearly.get(i);
			}
			else {
				competitors.add(users_yearly.get(i));
			}
			
		}
		if (user!=null) {
			user.competitors = competitors;
			return user;
		}
		return null;
	}

}