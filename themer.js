class Themer {
    createTheme(themeName, colors) {
        const entries = Object.entries(colors);
        const style = document.createElement('style');

        style.innerHTML = this._createStyleString(themeName, entries);
        document.head.appendChild(style);
    }

    setTheme(themeName) {
        document.body.setAttribute('theme', themeName);
    }

    _createStyleString(themeName, entries) {
        const str = `body[theme=${themeName}] {${entries.map(([ key, value ]) => `${key}: ${value};`)}}`;
        return str.replaceAll(',', '');
    }
}
