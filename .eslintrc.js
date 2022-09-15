module.exports = {
    "env": {
        "browser": true,
        "node":true,
        "es6":true
    },
    "extends": ["plugin:vue/essential"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "parser":"vue-eslint-parser",
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-console":'off'
    }
}
