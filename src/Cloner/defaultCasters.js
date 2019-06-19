const Caster = Jymfony.Component.VarDumper.Caster;

const casters = [
    [ Caster.ConstStub, Caster.StubCaster.castStub ],
    [ Caster.EnumStub, Caster.StubCaster.castEnum ],

    [ Date, Caster.DateCaster.castDate ],

    [ Error, Caster.ErrorCaster.castError ],
    [ Caster.TraceStub, Caster.ErrorCaster.castTraceStub ],
    [ Caster.FrameStub, Caster.ErrorCaster.castFrameStub ],
    [ Jymfony.Component.VarDumper.Exception.ThrowingCasterException, Caster.ErrorCaster.castThrowingCasterException ],
];

if (ReflectionClass.exists('Jymfony.Component.DateTime.DateTime')) {
    casters.push([ Jymfony.Component.DateTime.DateTime, Caster.DateCaster.castDateTime ]);
    casters.push([ Jymfony.Component.DateTime.DateTimeZone, Caster.DateCaster.castDateTimeZone ]);
}

module.exports = casters;
