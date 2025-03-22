# Test by sorting countries

## Before optimization

Commit Duration: 32ms

Render Duration: CountriesList - 3ms, Filters - 0.3ms, MAin - 0.3ms, every Country - from 0.2ms to <0.1ms

Interactions: Sorting by Name A-Z

Flame Graph: ![image](https://github.com/user-attachments/assets/d5f8ab15-3cc5-4678-94f0-0ef0bb69a56f)

Ranked Chart: ![image](https://github.com/user-attachments/assets/52895afc-5c8a-4a70-a1bd-3947d644f5af)

## After optimization

Commit Duration: 5.2ms

Render Duration: CountriesList - 3.2ms, Filters - 0.3ms, Main - 0.1ms

Interactions: Sorting by Name A-Z

Flame Graph: ![image](https://github.com/user-attachments/assets/f45e1ad6-d06a-4d1d-be82-209e781ae5aa)


Ranked Chart: ![image](https://github.com/user-attachments/assets/936cb9d3-6629-4d02-a812-47e05901c07e)

