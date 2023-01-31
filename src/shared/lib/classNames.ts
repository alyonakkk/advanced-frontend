type TMods = Record<string, string | boolean>;

function classNames(cls: string, mods: TMods, additional: string[]): string {
    return [
        ...additional,
        cls,
        Object.entries(mods)
            .filter(([key, value]) => !!value)
            .map(([key]) => key)
    ].join(" ");
}

export default classNames;
