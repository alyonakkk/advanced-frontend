type TMods = Record<string, string | boolean>;

function classNames (cls: string, mods: TMods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => !!value)
            .map(([key]) => key)
    ].join(" ").trim();
}

export default classNames;
