# {{projectName}}

## Project setup
```
{{pkg}} install
```

### Compiles and hot-reloads for development
```
{{pkg}}{{#unless isYarn}} run{{/unless}} serve
```

### Compiles and minifies for production
```
{{pkg}}{{#unless isYarn}} run{{/unless}} build
```

### Lints and fixes files
```
{{pkg}}{{#unless isYarn}} run{{/unless}} lint
```