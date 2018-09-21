package hackthealps;

import java.util.Random;

import com.google.gson.Gson;

import spark.ResponseTransformer;

public class Utils {

	public static String toJson(Object object) {
		return new Gson().toJson(object);
	}
	public static ResponseTransformer json() {
		return Utils::toJson;
	}


	public static int getRandomNumberInRange(int min, int max) {

		if (min >= max) {
			throw new IllegalArgumentException("max must be greater than min");
		}

		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}
	
	public static int[] randomIntArray(int size) {

//		Random random = new Random();
		int array[] = new int[size];
		// populate the array with sequential values
		for (int i = 0; i < size; i++) {
			array[i] = Utils.getRandomNumberInRange(1,100);
		}
		
		return array;
	}
}