package hackthealps;

import java.util.ArrayList;

public class User {

	int id;
	//	  private String name;
	int money_saved;
	int co2;
	ArrayList<User> competitors;
	



	public User(int id) {
		super();
		this.id = id;
		this.money_saved = Utils.getRandomNumberInRange(1,100);
		this.co2 = Utils.getRandomNumberInRange(1,100);
//		this.competitors = new ArrayList<User>();
	}


}

