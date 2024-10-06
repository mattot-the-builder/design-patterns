interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    this.observers.forEach((obs) => obs.update(this.temperature));
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyObservers();
  }
}

class Device implements Observer, DisplayElement {
  private deviceName: string;
  private temperature: number = 0;

  constructor(deviceName: string) {
    this.deviceName = deviceName;
  }

  update(temperature: number): void {
    this.temperature = temperature;
    this.display();
  }

  display(): void {
    console.log(`${this.deviceName} temperature: ${this.temperature}\n`);
  }
}

function main() {
  // subscribers to the weather data
  const iphone = new Device("iPhone 12 Pro Max");
  const macbook = new Device('Macbook Pro M2 13"');

  const weatherData = new WeatherData();
  weatherData.registerObserver(iphone);
  weatherData.registerObserver(macbook);

  weatherData.setTemperature(25);
  weatherData.setTemperature(30);
  weatherData.setTemperature(50);
}

main();
