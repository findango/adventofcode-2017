// --- Day 9: Stream Processing ---
// https://adventofcode.com/2017/day/9

// groups: {...} or {{..},{..},{..}}
// garbage: <...>
// cancel: !
//
// Your goal is to find the total score for all groups in your input. Each group is assigned a
// score which is one more than the score of the group that immediately contains it. (The outermost
// group gets a score of 1.)
//
// {}, score of 1.
// {{{}}}, score of 1 + 2 + 3 = 6.
// {{},{}}, score of 1 + 2 + 2 = 5.
// {{{},{},{{}}}}, score of 1 + 2 + 3 + 3 + 3 + 4 = 16.
// {<a>,<a>,<a>,<a>}, score of 1.
// {{<ab>},{<ab>},{<ab>},{<ab>}}, score of 1 + 2 + 2 + 2 + 2 = 9.
// {{<!!>},{<!!>},{<!!>},{<!!>}}, score of 1 + 2 + 2 + 2 + 2 = 9.
// {{<a!>},{<a!>},{<a!>},{<ab>}}, score of 1 + 2 = 3.

const input = '{{{{{{},<!!!>>}},{{{{{{{<a!u!>!!!>!!}<>},{}}},<!>},<!!a!>,<!!!!!>!>!>,<i!io!!,!!}i!!!>},<a!>},<>},{<!>,<i\'i}u{!"!!!!u!}>}},{}}},{{{{<i!!!>,<<!!e}!!!!!!i!>{>},{}},{{{<i"!>aa>},{<,oi!!!>aa,!!!<!ei!>},<a,!"<}\'!e>}},{<"a!>!a,{"!o\'!>,<!>,<!!!!<!>,<!",a!!!>i>,{}}}}}},{{{{{<o!!"e!!!>{!!!>,<{!>},<i>,<!>,<<">},{{<!!!>a!>!!!{"{ao!>},<!>aa!!!>!>},<"!>,<!!!>!>,<>},<au\'!>!!o!>,<ie>},{<}!\'i,!!}e!>,<!!!>},<!\'a!u!,!{!!!>!\'>,{}}},{{{{{{{<eu,!!!>,o!!!><",i!>,<!>,uuao>}},{<}<"a{!!!>!!!>,<a!!!>u!>,<!!!>>,<"!!!!<}!u!o}\'!!e!!!>a!!},,!>}!!>}},{<">,<!>,<>},{<ie!!!>,<}!!{!>},<!oo!o<!!!>,>,{<!>,<!!}!!,{!,!>,<>}}},{{{<}!!{!!!>i,}\'!"ooo,!!>}},{}},{{{<!>,<o{}"e!!!!!!!>\'!>!!!>}<!>,<{!>},<{<!>},<a>}}}},{{<"\',,\',a{i!oi,>}}},{{<!>!!\'}e!>{,!!!!!>"a!>},<"!>},<},!!i>}}},{{{{<"{!>!!u!{"">,{<>}},{{{}},<,!>,<a\'!!a{uo!>},<>}},{{<{!>,<!>,<u{\'!\'!},},!>,<<<!>},>},{}},{<!>,<ia!>,<!>},<{>,{<,!>,<!!}u!>},<i!>},<!>"eu!u!>},<{>}}}},{{{<u!>,<!!i{iu\'!!!>!!}o>,{<!>},<<>}},{{},<e{ei!!!>,<"!!!!!>!>,<!>!>"<i!!}!>,<"io>},{}},{{<!>,<ia"!!!>">,<">},{{<}{>,{{<i>,{{{<!\'!>},<!>},<,"!>,<!!!>!>!>,<i,!i\'!!!!!>},<i}>}},{{<u"}!u!<!!!>aa"!>oa"!!!>!>>},{}}}},<!!e!>},<!u\'a"i}!!!!i!\'>}},{{{<{}}">},{<{"!>,<!o!a!!!!!>!!\'}!!!>},<!!!!!\'i<"iu>}},{<!!!!!>u}}!,u!!!!!>!!,e!!!>"!!!!\'}!!!>},<{>},{{{<!!!>a!,"!>,<,}ua\'!a>,{{<ia!!!>!!",}\'!!i<<!!!u!!<e!><>},{<!!u!!!>\'!>},<!!!<\'>}}}},<<u!>!!!>>}},{}},{{{<!>},<!!!>o!!>}},<a!>,<!!!>>}},{{{{<!!!!>},<,,<}!\'>},{{{{{{<a!a!>},<\'{,!>},<ia!}},!o!>},<!>},<<>},<!!i,a\'!a,e!,a!>!!!>,<!!{>}},<\'}!>},<!!!>!>},<<}!!"!,!!!>,<!!o!e,o}i!!e>},{{}}},{<\'!!!!!a\'!!oa>,<"{"!!,!e!!}<\'!>}!!!>i>},{<,!>},<{}!>},<!>},<i!>,<oai!!!>>,{<<!",!!!>!,!"!!!!,!!!>{!>},<u!!u{o!!!>>}}},{<!"!!ii!!i!!}i\'e}!>},<""!>,<!\'a!!!>},<e!>,<>,<{!>i{!!!>!>!!{!\'ee>}}}}},{{{<""!}<<!!<e!!!>!>!,!>},<!!!>,>}},{{},<!!!!,\',!!!>!e!>!!!>ui!!,,!!!!!!!!!>!!>}},{{{{{<\'{!!!!i\'!>,<o{,}}!>!>>},<!!!a!!e!o,,>},{{<!!!{{"{\'<}!,>},<,{!!!>"!>},<,!!!>,<\'!}o>}},<!"!!!>}!!!>e"!>,<{{!>,<o<"!>,<!>,<!{!!!>!!!>>},{<,!>,<!e>}}},{},{{{<o\'\',!!i<u!!>}},{<>}},{{{{{<a!!!>ii"!>,<"<e>}}},{{{}},{}},{<i!>,<,i!>},<>,{<!>,<<!>,<!!!>,<\'!>\'>}}},{{<}u>,{}},{}},{{{},{<!!!>!{!!!>},<i"!><a>}},{{<"ooaa<,!a!>},<e"oa!u,!ouu>}}},{{{<!!!!\'>}},{{<i\'!!a>,{<!!!>"e}!!,!!!"!!,!!!><!>,<!>},<!>},<!,e,>}},{{},{<o!!!>!u!\'!e<e!!!>!o!>,<!!!!<!!!!{!>,<<\'>}},{{{{}},{<i!!!>!>\'!!!>!!!!!!!>!!!>,<>,{<!}!!ai}{!>,<\'<!!i!>},<!!!!!>!ii!"<>}}}}},{{{{{},<!!!>}!!!>},<{e!!!\'{!>},<a,!>,<<<>},<uea}>}},{<!!>},{}},{{{{}},{<!!}"!>,<<e\'!>},<!!!\'!!!>,uiie\'!>},<!!!>!!}>}},{{},{<>}},{{<o"uu!!!>!!!!!>,<!}i{e!!\'uu!>}a>,<{!!>},{<>,<!>},<>},{{}}}}}}},{{{{<!>\'!!!>a!>,<!>,<o!!!,}!!>},{{<>}}},{{},<u!!{!>},<!>,<<!>},<<ai!!oi}u!>},<!>!>},<>},{<>,<!!<!!e}!!{!!!>,<!>!>},<o}i!>,<e>}},{{{<<!!!,<!>,<!e\'e"a\'>},{<!!!e{!<!!!!>}}},{{{{}},{{{<!!,!!!>{!>},<"}!>\'!>},<!!e!!!>!!<\'}i!>!!>},{{{<a!!,,,u>,{}}},{<}!!!>"!a,u!!\'ou!>}!a>}}}},{{},{<}!ae!>,<"!>,<!!!>{,>}}},{}}},{{{{<i\'{uo!!!>,>},<u!>},<!!!>!!!>,<,!>,<i!>},<oe>}}},{{{<a!!!>,a!!!>}}!>},<!o"i,o!!!!uu!>,<!>},<>,<i!>,<!>},<!!!><a>},{{<!>{!!"a"\'}>},{<!>,<,,e!>i{>}},{<>}},{{},{{<!!!!},}!!}!\'!>,<a!!"{a!>!!!>!!!>i!>,<>,{}},<o!!<!!<,!!!>,!!ii\'!<u}!!!>!>}">},{<}a<<a\'e<{<uu}a>,<!!!!!>!o>}},{{{{<e!>},<,e!!!!!!!u>}},{},{{<"\'<\'>,{<e!>!!{>}},{<\'"!!!!!>\'!>"{!>!>},<!>},<i<!!!><aa{>},{}}},{{{<!>},<i!>\'e!>},<!!!>e"!!!>,<!>},<}eo!>,<!>,<,a>}},{},{{<!!!>}ie!!}!!i\',>},<!e!u!!,!>},<!!!>{{!!!!\'!>}a"!!!>,>}},{{{<!!!!!>,<{aa<i!!!!!!!>\'{oa!}!!!>i>,<,<!!!!!>,<!!!>!>"!!!>!>,<}\'!\'i>},{<!}{ee>,<>},{<!!!>u!!!"a,"!>},<!!!!!!!!!>ea!!!!}!>,<!i>}},{{},{{{<,o"\'>}}},{{<!!!>!!!>!>{,\'ue{\'!!!>>}}}},{{{<e!>},<!!!!!!!>o}!>,<!{!>,<!!!>\'"!!!!<i<u!!\'{>}},{{{<!!!>{a!>},<\'\'!!o!!!!!>ii!>,<eii{}<e!!!>>},{<\'"!!!!{!!!!!>!>},<}>}},{{<uo}!e\'!>,<!!,<!>,<a!>,<<!>!>},<>}}}}},{{{{{{{}},{{{{{<{!>ie<e!>,!\',!>,<u!!!>}a!e!!!!\'!!>},{<!!!>,<i}},<!>},<!!!>!!!!{>}},{<!>},<,"{!!!>\'o}!>,<\'{>,{<e,!!!!!><>}},{{},{}}}},{{<oi!>a\'!!!>,<!!{{a!>,<!!}i<!!"o!>},<!!!i,a>},<!!u"\'!!\'!>!o\'{iei!!u!>o{\'"!>},<>}}},{<{!!"u>,<}!>,<>}}},{{<!!<!>,<>}}},{{<{!!,!o!!!>}"!!!>!>},<a,euo"o!>!>},<e}>,<\'!a!!!>},<<!>,!\',{i>},{{<e!a!>},<ai{}{!!ue<>,<\'!!<>}},{}},{}}}},{{{{{},{}},{<oia!!!>!>,<eae!!<>}},{{{<>}},{{<o\'}!>o!>},<!!,!>!>},<>},{{<!<>},<!!!>u"<<!\'o!!"!!!!!><,\'!>>},{<\'!!!>"!>,<oi,>,<!!!!e<"o{\'uo!!!!i<!!!!!>},<!>>}}}},{{{{{<!}\'!o"!>},<!>,<!<iio,{aa!>},<>,{}},{{<e!!{!,!!a\'>,{}},<!!}<i!!!>}i<!>!!\'u!e!!!!\'!>,<!>,<,!>,<>},{{{<!!,!>!!!>a}uiu!!>}},{<!>,<!!uo<!>!!!>,<\'!!!>o>}}}},{{{},{{},<{"o>},{{},{{{}},{<i!>,<,!>,<!{<!!"u!>u!!ii!>>,{<\'!!!>!!!\'!!i{!\'<>}},{<!!\'!>,<oo!>!>!>},<i">,{}}},{<!>,<>,{<!>!!"}!>},<!a!\'!!!>!\'ei>}}}}},{},{{{<{!!!>>,{<ai!!!>,<\'<>}},{{<!>i!!ae<!>,<!ii!!!!i!!!!oo!>,<}!!}>},{<,!!!>!>i>}},{{{{<,eo}!}o!>},<"!!\'<{<!!!o<!>,<!a!!ia>},<!!<ie!!!>!\'i<u"\'!!!>i,}!!!!e>},{<!>!!!i!>,<ai!>},<!>e!!!>{!!{u!>},<!!u>}},<,!!{uo<\'!>!!"}}>}},{{{},{{<ae!>!"o<o!!!a>},{<i!!{i{!>,<"!!!u!>!>,!>,<!!!!!>>}},{<{\'e{!!"!!}!!"a!!!>i>}},{{<\'!<,,}>,{<!!!!!>!>},<!!,!>},<!o!},!!!>,,e!!"eea!>ie>}},{},{}}},{{<"{!>},<!<e<<!!}>,<}!!!>!>,<u!ii<,ii}!!!>!>,<>},{<!!!>{\'!>!!\'!>,<!!ao!!}!!!>"io!!,!!}{!!!>,<>}},{{{<o,!!ie!!!>,<!>>},{{<"!!!!!!}!>,<!!i<,aa>,{<u!>},<\',!>},<\'!!!>,<a!!u!>},<,!!!>!!e!!!>},<<o">}},{}},{}},{{{{{{<!>},<\'>}}},{}},{{<uu!!"!!<e!>!>!!!>!!o>},{<,u"!>},<\'{!!!>{}{>}}}},{{},{<<!>u!!,!<iuia,!\'}>}}}},{{{{{<!>,<"!!!>a!!!>{u!!!>>}}}},{{},{{<!!!>!!!!}>,{<!>},<,",e\'"!!!>!!!>!>},<u"i>}},{<!!!>{!>!!!>u!>},<"e<<!,>,{}},{{},<{!>,<!!!>ou{!!,!!i<{o\'i!>,<ae>}},{{{{<!>},<o!>},<!u}{!>!>},<!!!!\'{a>},{{{<!!e}!!!!!>>}}}},{<!!!>,<!>,<{!>io,!""o!!e""aee>,<ui\'o!!>}},{{<\'ue{\'u!!!>,!!u!>,<ouu!!!>!>o!o!!{>,<i!>,<!>!>,<!!i>},{{}},{{{<!>},<!!u>}},{}}},{{{}},{{<!!!!!!a<!<!!a"!!"e>,<!o<!!!>>}}},{{<\'\'!!,!!">,{<<euu}uo,!!<a!!!>!>,<a!!!>,!>i>}},{{<,}u!!!>},<!!!!!><u\'}>}}}},{{{<!a!e!<!!"\'!,!>!>,<!!a!!oi!!!>,<aiuu,>,<u<"!!!!"o!a{!!i!!!>o{!!>},<!>!>},<!!!"!!e!>,<!!!>!>},<ou,{i!>,<a!>!>uo>},{<!>o!!!!a!>!!,u!!a!!!>!!!!!>"!!!!!>>,{}},{{<!>},<!>!!"!>},<a\'!!,"}!!!>\'<i\'!>,<!!>}}}},{{{{<!!"o\'e}"!>},<ie"!!}ea!!!>>,<<i"!!!>>},{<>}},{}},{{}},{}},{{{{<,u!<"<ie!>},<!>,<!!!>}a!ou!\'!>},<>},{{<ie!!!>},<!!!>!!a!><!!!!e!!"e>}},{{},{<!a!u{>}}},{{{{{{},{}}},{{{<!\'{!>},<}a"aaa!>"o!>,<,!>},<{!!!>!>,<{>}}}},{{{<!>,<<i!>!!!>!!a,"<!>},<i}o{>,{{<!!!!uu!>!!\'!u<>}}},<!o!!!>{!!!>!!i!!!>!!"{!!!!!>>},{{<i,!>!>},<!>,<!!!>},<ae!!e!>>}},{<eo!>,<a}>}},{{{{{{<{uu<,o\'\'}!!!!!!!ao<!>,<>},{{},{{<,a!!!>!>!>,<"u<!>,<!!!><,!!!>!!uue{!>,<>}}}},<a<u>},{{},<\'e{e!!!>!}<!!<i{o"!>,<!!io!>,<!ia>},{{<}<!!}e{}eie}!!{i!>,<>}}},{{<!!!!}!!!>!>},<!>,<!!!>}!!i!!!>},<!>,<i>},{{{},{}}},{<}!!a\'"\'>,{{{{},{}},{<!!!>},<ia>}},{<!!!>ao!!\'\'!!!><!>,<!!i!<!>},<,!!!>!>},<iaaeo>}}}},{{<u!!!!i!!!>a>},{{<!!"!>,<!>,<!>,<e\'!",o!!!>!!i!>},<>}}}},{},{{<,ei\'{,ea!!uo!>,<a!>,<>,<!ee<!><,!>{!!!!!!!>>},{},{{<!!}o!!!!\'a\'e!!!>!!!>!>,<>}}},{{{<,i}u!!<!e">},<o!!<,{,u!!!>!!!>{>},{{{<!!!>!>,<!>!>}>},<ea>},{{{{},<i!!!>}o{!!!>!!!>u!!ioe!!!!!>!!!>},<>}},{{}},{<}!!!!\'"\'a!!{!>,<<!!!>!!o\',!>,<!!!>!{!>,<!>,<>,{<o""!>},<ai>}}},{{{{<!!!>!!!>!!!!!>ao!>,<"{!>,<i}<oo!>e\'!>,<>}},{{{<!!!>!!}<<,>,{<}<\'\'\'!,!!!>ea!!\'!{oi!!!!ao!{">}},<o!>i>}},{{<!!ouo<!>,<i!>,<}{e!!\'!!!>u{!"!!\'>,{{},{<!<!!!>">}}},{{{<>}},{}}}},{<!>,<!!ia!<!>,<a!o!!!>e\'!>,<!!<,o\'>,{<!oi}!>,<!!!>!>!>,<ea!!!>"!>!>!}"o\'!!!>!e>}},{{<\'{{\'>}}}}}}},{{<!a!>},<i}<"{<e!>!>},<,"\'ia!!!!!}e}>,{<>}}},{}},{{<!>},<!!""<{!!!>!>,<!>},<!,o<!!!>!>,<!>,<e\'}>,<},ou<!>!!,!>,<!>oi!!}>},{<a!>},<!!!!!>{ae!!!>!>},<>}}},{{<!>,<!!<o}e!>,<!>},<!>,>}},{{{<,!!e!!\'a!!\'o!!!>,<!!>},{}},{<>}}}}}},{{{{{{{<a!!!>,<i!>,<{>}},<>},{<e"!>},<!>e!>},<\',>}},{{<!>},<}">},{<u!!!>,!!!>\'a,!>,<}!}\'!!\'<u<!!!,<>,<!>,<!>},<!!,ea>}},{{{{<!>,!!!!!>ao>},<o!!{!!a{"!!!>},<>},<}aa,uu>},{{},{<oa!>},<!!\'aa>}}},{{<!!!!i!!"\'!!ai!>},<o"a>,{{{{<}!!!"!>,<!a!!!>o>}},{<u!!i,!!!>!>>}},{}}},{}}},{}},{{{{},{{<"\'"uei{\'a!u!!!>},<!{{e>},<"u!!!>},<{!!a!>i!!e!!!>>}}},{{},{{{<i<{!!!>!!!!"u{!>,<}>}}},{<!!!>\'!>,\',!!!>oe"\'uu{oa}<>}},{{{<>,{{<,!!!<>},{}}},{{<!>},<<a>}}},{{<!>,<\'!!e!!!!!!!>,<u>,<"u!>i!>}!!<o\'>},{{<"a!>,<!"o!!o>},<!!!>!!!>"!>o!!!>u!>},<!!!!!>},<<!!!>>}}}}},{{{<!>},<e}<!>,<,\'{oi,}ia>,{{{{{{{<!!!!!>},<!><!>},<o!>a\'{i\'i>}}}},<!>},<"}i<}!!!>!!!>i>}}}},{{<!iia<"!u,<!!u!!!!!>a>},{{<!!!>!>},<ee>}}}},{{{}}},{{{{}},{{{<!!!!!>eua{}}!>},<!!i}{!>},<}!>},<!!\'!!!!"u>},{<,!!}"ei!!">,<<o<!>},<oi!>,<u},{>}},{}}},{{{{<i!>>},<!!!!!>},<e!!!!<"e!>},<,{>}},{<}!!e>,<!!!>,!>},<!i!!oe,!a!!a!!!"!!"!!\'>},{{<,!!e!!!>,,{!!}}!!<oe!!u>},<a"uao!o!!{e\'!>o!>},<o>}}}},{{{{{},{<u,<>}},{<i>,<!>,<"!!!"!}!>},<!!!!!>\',<!>,<o!!e{>},{{},{<!>}!><>}}},{{{<""!>!>,<!>},<!>!!!><{!!!>!!e>}},{{<eai\'<<!!!!!>,!!<\'i>}},{<u!>i,!>!!,<!>i\'a>,<!>,<!>,<!<\'!o!!!!!>,<>}},{{},{{{<!!!>,o,!!}!>!>!!i!!{u!>},<>},<"!>},<!>,<{!>!>},<<!!!>!{!!!u}e!>},<e!>},<"!,!">},{{<!>},<!u}!>,<>},{{<>,{<!!!>}}!!,!>,<!!u>}},{<i!e\',!!\'<,,>,{<!!!>!>,<ao}a\'!>,<!!!!!>!i!!!>>}}},{}}}},{{{{<e{!!}{,<\'a!>,<!!!>>},<>},{<{<u}!!iu!!\'!!!>o"{e!>,<!>>,{<>}},{<{!>},<!>},<!>},<}u{<!!!>,<{,!!!>!!<>}},{{<!>!!i\'>},{},{{{}},{{{<!!!>a!,!!!>},<i!>},<!!i,i\'!!}!>>},{{{<!!!>}i<!!!!!>,<u,"ie\'!!!!!!e!!!>e!u>}},<u\'!>,<!!!>\'o!>,<}\'!>,<!!!!}"a>}},{<!>},<o!<!>,<i>}},{{{<>},<a!!!>,<a{!>!!}!iaue!>!">},{{<!!,{e!!!>!!!>},<i"!>,<!!<"!!}iue\'!>!>>},{{{},{}},{<e!u<!!o<!!!>!!!>o!>},<o>,{<!!!>"<!>,<!>},<!>},<!>,<!!e}>}},{<!i\'!>},<>,{<>}}},{<o!>,<!>,<<!>!!{ui{<a!!{!!\'!!u!>>}},{{<!ou!!!>!>},<u,!>!!!a\'<a!!"uo{>},<}!>>}}}},{{{{{{{{<!!!>,<"{!>,<!i>,{<e,u>}},{{<!!,!!a!>,<!>!!!>},<\'\'e!<>}}}},{<<!>},<!>o!!i!!!\'!>,<!!!!!!!>o,!}e!!!>,!>a>}},{}},{{<i>},<e!!e!!{!>!!!>u!>!<!>"i{!>,<!>},<\'!>,<>}},{},{<>,{<"!>,<u!!!>},<!>,<"!!!>!>,<!>e{!!!>!!!!!!ue<>}}}}}},{{{<!!!>},<!!}"e!!>},{{<a!!o!>oa!!o<!>,<!!!>},<<\'!{>},{<o!>},<!>e!!i,"}!>!>},<>}}},{{{{{{{<}!\'!!}!!e!>,<>}},{<o,>}},{<!!!>}!!!>"!>},<>},{{<!u!,!!{!>,i,>,<e<i!!!\'<}>}}},{{},{}}},{{{<!>o"uu>,<!>{ii!i<>},<\'oe{!>>},{<<\'ao!!u!!e!!!!!>,<u!\'\'ee!!"}>}},{{{{{<i!u!<a!>},<!!!>,<{!ue\'<!!!!!>io!!aa,>},{}}},{{{{<\'!!!>!>},<!!<!!<\'\'ea!!a!ii<ai!>>}},{<\'!{<a"o<!>},<!,a,i>},{<,!>,<{>,{<}>}}},{<ao,e!>},<i>},{{{{<o{!>},<!!}!!<!!!>},<oo>},{{{<!!!>o!>!!a!!\'"!>!!!!!>!>"!{!>},<>}},<!!,,!!<,!{!!!>,<!!!>!!!>>}}},{{}},{{<!!!o}!>,!>!"!>a">,{<}>}},{}}}},{{<u!!{>},{<!>},<!!!>"",{"i!!!>u"a!!<oo!!!!!>,>}}},{{{{{{},{{{<a>},<\'!\'!>},<a>}}},{<ou<>},{<!>ooiu!>},<!!!a!!!!!>>}}},{{<i!>},<{!!,ue!>,<!!!>"!\'!!\'u!"i!>,<>},{{},{<!"<!!!>!!\'ueo>}},{{{<{!>!!a!!!>!!!>\'!>\'!!<o}!!\'i!>},<!>},<!!>},{{<oe!!!>},<\'i!!!>!!o"!}!u,i"oeu"",>}}},<!!{o}}u}"!<!""!!o!>},<<!>},<}o"i!>},<>}}},{{{{{{{<ea{}u!!!>!!!>},<!>},<>}}},<<eu!!!!<!!<,!!!>!>}"!>,<u>},{}},{{<!!{!!}u{}u\',!>,<!>},<!!!>e\'"}>}}},{{{<\'<u!u!o!!!>!>},<!>">},{}},{}}},{{{{{<u!>,<e!!!!!>!!!>!!!!!!!>!u!>>},{<!oa!!!ee\'!"u{,ui!!oii!>},<u!>},<o>}},{{<}o}!,!>},<!!e!>},<<<!><<!>,<!!,o!!{!>,<>},{<,!!!>,<!!"!eu"i>}},{}},{{{<!!!>"uii!>},<!o}!>!!!>>},<,>}},{}},{{{<,{,,!>,<!!!!u!{o>,{{}}},{{<}!!a!{!!!>oi\'a!>,<{{,\'>},{<{o!!,!>,<!!\'!>e,o}u!>},<>}}},{{<!!!{!>,<\'o!!!>\'!!}!!"{ue"!>!!,>},<!"!!,a!>,<!>!!"oie>},{{},<o!!,!!!!!!!>}ei>}},{{<oi!i>,<,!!a}>}},{{{},{<eo">}},{{{<<!!!>!>},<!!e!!!>,<}i!>e}o!>,<oi!>,<!!!>\'>}}},{{{{<}!>,<>},{{{},{<>}}}},{}},{{{<uaei<>,{<{{"!!>}},{{{{<!>,<!!!>u!!eao}\'!!!>},<!>},<!>}!}>},{<!>!>ui>}},{{<!!!!ao{}\'\'!>\'uo!>!!!!!>},<!!i}!!!>!!!>>},{<<i!!!>,<\'!>},<u{!>},<!!!>!!<>,<,<ia!>{!>eu>}},{{<>},{}}},{{<!!{i!>!>},<!>,<!!!>!!u}!!!>o!>},<>},{}}}}},{{{<"!>>},{}}}}}}},{{<>,<\'!>!>,!>},<!>!<>},{{<,o\'"ia!>e}i,ie,u{!>},<!>},<!!>}},{<!{{}!>,<!>},<i!,>,<o!>},<eu{e!!!>\'o!!!>!>!>,<{"i{!!<a>}},{{},{{<!!!!i<<a!>},<!!i"u!>,<!!!>,<<!!!!!>"!>},<,>},{}},{{<"oi>,<!>,<!!!><,oi"euuoo!>!>,<!>,<ie>}}}}},{{},{{}},{<>}},{{{<!>},<\'>}}},{{{{<a{i>},<ou!>oiae<!>},<!>},<!>}<o!!!>u!>>},{{<!!!>,a!!!>i"!!"!!\'>,{{},{<!!"{ou\'}!!,iue\'>}}}},{{<o!!!>!!"!"!e!a!!!>i!>},<!a!!>},<<!>},<!!!>,<>}},{{{<!!!>!>,<!>},<>},{<!!!>!!!>!!!>},<!>},<o!>e!!"!>,<>}},<>},{{},{}}}},{{<,eo!!!>}!>,<!>},<>,<!!!}<!!\'{<!>!!!>}e{!!!!!>!!"u<>},{},{<<},!!!>u!>},<!>},<>,<eo{!>!>},<!>,<o!!!"!>i!!!>"!!!>!>},<au>}}},{{{<i"}!>!>},<!>,<u!>},<a!!!>,<!>>,{{<!>,<,}!!"ei!i!!,a"\'!>e<!>,<!}>},<>}},{{{{<<,!>},<!!!>\'!>,<!!!!u!!u{!e,e!!!>,<a!!!>!!!eu{!>>}},<io{o"!>,<ii!!!!!>,<!>{!!!!>},{<a">},{<"!>,<!>,<!>,<!>,<ea!>},<iu!>,<\'!<i,<o>}}},{{{{{<o!!!>,<!>i<\'eu!!!>!>,<a\'!>>},{{<!!>}}},{<"<{!>!>,<!>,<\'{!>},<!!!>},<o!!a!!!}>}},{{},<{}!>!><<ea<u!!!>\'!>},<<>}}},{},{{{{{<!u!!!>a,!>},<a!u,>},{<!>o!!!!!>!!}u\'i!>},<>,{<e!!a"a!>a!>},<<!>},<ae!>},<!!i!>,<>}}}},{<!!oeu}},}}a"i\'<"o!!!>!!}{!>},<>,{<,a>,{{<!>,<}!!ia,\',>},{{<!!!!a{!>},<!>,<!!!>!>,<<!!!>{,!",>}}}}}},{{{{<!uo"}!!!!!!<!>},<>,{{<!!<i>},<u!!!>,<!>,<,\'!i,eo>}},{<!i!!e<!{e>,{}}},{{{{<,!!!>,<!>},<>,{}},{{{},{<o!u!!!!!>{!!ue!!oo>}},{<e!!!>,<!!!,!>,<\'"!!!!u}"!!!!!u!!!><!!!>>,<,!>},<!u}!>,<>},{{<{e"!!!e,""o"{\'!"!!!>a"!<>},<ueu<!!!>!!!!<!>,<!!a{},<\'!!!!{>}}},{{{{<oou!!i>,{<>}},<a}!!!>,!!!!{\'u",i!!!>ae!>},<!!!!,!!<>},<e{<ee<o!!!,!!!>>},{{<>},<!!!><>},{{{{{{<\'e!a!>!\'<!>},<!>!!!>,!!,!!!>!,i!!!\'!!!>,!!!>>},{}}}},<!!<!>},<"!>,<\'!!!>,<ae,a!>,<!!!>!>!!>}}}}},{{<<!>o!,!>},<!!!!!>!oa!!!>!>},<\'>,{}},{{{},{<}u!!e!!!!!>,<}!>,<!!!>},<i,!!!!e!>}!!>}},{{{<!!!e!><{e!>},<}!>,<!!!>!,!{iu>,{<!!!}!!!!>}},{{},{{<i!>,<{>}}}},{{<{a<,!!!!!>!<!">,{<}i!!\'e!!e}{<"!>},<!>},<\'e{aa>,{}}}}}},{<<}o!>,<!!u!>},<"{,"!!!>!>,<!!!>\'!}>,{}}}},{{<}!a!>},<\'!!!>!u{!!!!!>!>ioai{\'>},{{{}}},{<!!}!!!!!>}{o!!!>},<!>},<!>},<!!!!!>!!{\',>}},{{{},{{<,!>!>!>},<u!>,<!>!>},<o}i}!!!>>}}}},{{<!a!>>,{<i{a!!!!!!i<a!>!"{}}!>,<\'!!!>!!o>}}}},{{{<!!!>!!e}e!o"!!>,<!!"!!!><<!>!!!>,<,!!>}},{<"!!!>!!!>o,!!!>>},{{}}},{{},{<}!!o!}ua}!>},<,{i<>,<i!!!>!!!>!!!>o!>,<!>!!\'u!!}!>,<"!!>}}}},{{{{{{<<io!>},<}!!e<<e!>{>}}},{{<>},<!!!>u!>"}i!!!>,<,}}a!!!>!"!}u!!\'>}}},{{{{{<"!>,<e!\'!!uo!>,<o!!!!e>},{<!uuu,a>}},{{<\'a<>},<o!!}i>}},{},{}},{{{<!"{,au<ee!e,!!">},{<}\'"i{"!iou!!!>!!!>},<!>},<>}},{{<\'"!!!>e!!au\'!!!>>},<\'\'"ui<u!!!"ua"i!!!>!>,<!!a"!>a>}},{{{<!!!{u}{\'}!!!!io,e>}},{},{}},{{{},{{<\'"!>,<e!>{>},<\'a<!>},<!!!>"oee>},{}},{<<aee!>},<u{"{!!ea!>o{!>,<!>},<!!!<!!!!!>>},{<!!<e\'!>e!>!>,"!>>,<!!!><o!!o!"!!}!!!!u<!!!!"{!i!!!>>}}},{{<\'!!!>!o!}!>,<,!e!a!ao>,{}}}},{{{{<{}!>,<>}},{{<}oa,!!e!>},<<e}!!!!!>},<!>{!!!>{!a,u>},{<\'!>,<u>}},{{<"!!!>,!!!>!!!!!><!>!!a!!!>,>,{<!!!>,!!>,{<!!!>!{o>}}},{}}},{{{<i!!o>}}}}}},{{{{{<u>}}},{{<!!!>!!!>"oeai,!>},<!>,<!>},<!!!!!>}e<o{>,{<"{}!!!>a!i,!!i!,\'{!!},,>}},{<a<u!>!>},<!\'!>,<>,{<o!!>,{<{!ua!!o!>},<!!o!>},<!>,<!>,<!>!>oiu}>}}}},{{}}},{{{{<!>,<\'"!!ii"!><a>},{{<>},{}}},{{<!!o<}!!u{!>},<!>},<<!>,<<!!}\',a!a!!\'>},<!!!{!>},<!>,<!>,<!!<!!!>>}},{{{{<e"!!\'!!!>},<!>,<a!}i>,{<!>\'\'ae!>!>},<!>},<}!!!>",e!!{u{>}},{}},{{<!oa}!>},<!ii!>!>!>,<{!!uu>},<!u!!!>},<!!a!\'!!uo}oo,,\'!!>}},{{{<!!!>o!>,<\'<ia!!!>,{!>},<>},{<<"u!!<ui!!}!>},<"!>oo!}!>,<e}!>,<!>},<!!i>}},{<u{!!u!!!!<{u!!!>!!!>u!,!!!>!!!>\'eio\'>,{{}}},{<e!>},<"!>},<!>!i!>o>}},{{{{},<<eai<!>},<o!<!!!>,<a}!,!!!>"!>>},{<!!!{\'!>{!}}ioui\'>,{<!>,<!!!>!!"!!\'!<o}}>}}}},{{}}}},{{{<!>!>!!a!>},<o>,<,!>},<{!>!>}i!!\'u,!>,<i!>,<\'a{>},{<!>},<i!>,<o!!!!!>o!>,<!><"!!!>>},{{{{{},{<!>},<a"!!<{!>,<!>},<\'!>!,\'!>},<!!!>,<!>},<u,>}}},{{}}},{},{<!,!!!>!!!>eo"!>,<a!io,uu!!!>>,<!!!>!!i!!!><>}}},{{{{{<e!!o!>}!>>},{}},<!!!>u!>},<!a,e>}},{{{{}},{<,!!!>!<<!!{\'e{!>},<>}},<e!!}{"\'!!{!>,<!!!i!!!i>},{{{{<}eu>}},{},{{{<!!<!!o,!!a\'!>},<o"a!!!>,<a!i!!!>{,!!!>>,{{{},{}}}},{<e!!\'!>,<!a>}},{{<oo!!!>"a>,<{o<<o!>},<i!!!>"!\'u}u!>},<}ue>},<!!!>!""\'>}}},{{<o"!!u"\'!!!>!<!!i!!{">},<!!e!>},<!!!!!>"!>{o>},{{<}"!e"o>},{}}}},{{<"!>},<!!\'i!i!>!,}eu"a!!!a!>},<i!!"!u!>},<{>,<!!ie!!o!!">},{},{{{<!e!>,<{\'!!!!<o<!!}!!!>},<!>!!!>>}},{}}},{{{<""{!>!!!!aau!!!!<>},<!uae!o!>},<"!!<eo>}}}},{{{{{{},{<!!!!!!!>,!!{!"e<>}},{<!>},<!!!!!><!!!!!>},!!e!>},<!>!>},<!!\'u!>,<"!!,}!\'>,{<e!!"\'!>},<o!\'"u{!>},<{!>},<<"!!!>,<!!!">}},{{{<{!!u<!!a!!!>,!e!a<}>},{}},{{{}}}}},{<}!>},<i!>,<!>,<>},{<,!>},<!>,<\'<"!!!!!>{<!>,<>}},{{{<!!!>!!!>!u}!>},<a}u{",o!!!>},<">}}}},{{{<!}"!!\',!!!>,<!>>},{{<i!!o<"a}o!!uu{!>,<",o!>{>},{}},{}},{{{{<e!!{!!<!au!!!>!>!>,<o!!!>u!"u!>,<e<a\'{>}}},{{},<!!<!!!>a!>},<!!!>!!}!<oa\'>},{<{!>},<!>{!>},<!!!>},<!!!>!\'o!!{i!>,,!>},<i>}},{{<\'ea}a!!}!i>},{<ia!!!>},<!!!>{u{<!>,<!!!>},<u!>,<u>,<,!">},{{<u!>},<!>,<>}}},{{{}},{{{<o!e{!!ui"!}!u!!!!}i,o!">}}}}},{{{{},{}},{},{<!>\'a!!!>>,{<!!!>a,,!>,<!>,<{!!!>ee>}}},{{{},{{<!!\'a"<i!!!>\'!!,""u!>},<""u!>>},{}}},{{}},{<">,{<}ea!!!>,<!}}oe"!>,<!>},<!!!>>,{<!!!{,>}}}},{{{{{{{<{u"!}"!!>}}}},<!!,{i!>,<u,a,!!!!"!>>},{}},{},{{{{<,"!!""ue!!>,{<}\'\'eoiae\'!ae!>},<o!>},<e>}},{{<!!!>,!!!>!!"!!!>!>!!i!,!!!!e>}}},{}},{{<!!!"!\'\'"}a!!!eia!!o!oeu!>},<!!!>a!a!>,<>},{{},{<!!!>!!!"!!!!",{>}}},{{{<{!{!>,<!>},<!>},<{>},<!!\'!!o,e!>!!>}}},{{{{<o}e!!>},{}}},{<u!!!>i!!!>!}o!>e!!o!!i!!}!!!>!!!!"u!!""!>},<>,<!i"e!!!>ei!>,ee>}}}},{{{{{<}!>,<!>},<\'o!>,<e>}},{{<i"!!e!ia!!<o"!>},<>},<}!i!!"!!,!>!!!>!!}i!!<\'!>},<!!!>u}{>},{{<o{!,!!u>,<o>},<!e{!{{!!!>ue"!!o\'!!,u!!!>!\'!!\'o}\'>}},{{{},{}},{{}},{<!>},<!<!!!!!><!>,<<u}!!!!!>,<!>,<!a!>>,{{}}}},{{<!!!>{\'>,{<!!!>"!>},<>}}}}}},{{{{{{{{<!>},<a,!>},<,>}},{{<a!<"a>,{<!>},<!!a!>},<o<>}},<!>uo!>,<u{!>!>!eu!e\'!>,<!>}a!!\',!!>}},{{{<\'"}!}!>,<!!!>!>,<!<i!!<!!!!!>i!>},<"!!!>},<\'a<>},<}",!!!>,i{!\'!!!>e,\'!!\'u!!!>\'>},{},{{{},{},{{<"!!e!!}!>e<!!!>,<>},{<!>>,<o\'a"!>,<i!u<<>},{<!!<!!!!ooi!>,<o!!}!>,<!u!!!>uaa!!e>}}},{{<{{,,"{!}!>},<!!!!a!!!!uie!>,<ia!o>}}}},{}},{},{}},{{{{{{<ou!>},<!!<>},{<o\'!!!!u!>,<!\'>}},{{<{i!o<o\'!!!>!\'>}},{{{},{<!><}>}},{{<ua!!ai!!aa!!!>!<!!a!!!>},<>},{<{,"!!<}!!!u!!>}}}},{},{<!!eio!!e!>},<e>}},{{{{}},<!>},<e!>},<!!!i!>i,u\'>},{{{<!!!>>,<!!\'i!>},<"!!!>!!i!o!!!>i,!>,<!>>},{{},<}!!!>!!!>o!>,<!!!>!!,!>,<e!!<!i"\'!!{>}},{<,!>},<<!>,<<!!u!>,<!!!>!>!!!{>}}}},{{{<o{>}},{{<e}a!>,<!}{e!!!>i!!!!}!u,>},{{{<"u{<!!!!!>,<"o"o!!!>,<!e"!ei<>}},<ou!!!>,,!>>},{{<\'e!!"\'ue!!!>!!}i"a!!"o">,{}},{<!\'\'!e">,{}}}}},{{{{{{<!}!!i!!e\'a!>,<!}e!>},<a>}}}},{<\'u>}},{{<>},{}},{{<<}""!!iu!>,<"!o,<\'}i!!!<!"{!>,<>,<>},{{<"i,"!!!>!!!>!>!>},<>}}}}},{{{<!!!>uu!>},<<!>},<!>i}u!!!!e!{,!!!!!{\'!!!>>,<{<!>},<!>},<uiaeo,>},{<!!{"\'!>,<\'u>,<!!i!>},<!!}!a!!!>!!!>!!!!\'i<a,!!o!>!}{\'!!!>",>},{{<>}}},{{{{{{},{<!!!>u!!"!!>}},<eu"o{!!!>ai!!o!!a>},{{},{{<{,u!>"e}>}}}},{{<ea!!!>!>},<!o!!!>!>,<>,<""!>,<!>}e!!}<e>},{<{,iiu!!e!!iui}au{i">,{}}},{{},<!i>}},{{{<!!!>}a!!,!>,<!>,<a{i!>},<ao{a!>!,\'!!!>>,<>}},{{<aio,!>"u!!!>!>!!a<<>,<,>}},{<!!!!o!!o"!!a"!>},<!!aae}>}}}}},{{{{},{{{}},{<a<!!!!!!!ea<{>,{<!!ie\'\'\'!!!>,<e!>},<i>}},{<a!!!!a>}}},{{{{{}},<!!\'!>},<!>},<>},{}},{{{<!>,<eio>,<>},<a!>a\'\'e,!!!\'!!a{!{!ia,>},<{oai!>!!!>!!!>,<!>},<aao!>},<,!e!>!!!!!>,>},{<ae>}}},{{<!!!\'!>},<{!!!>"!!!>}>},{},{<eo"!u!>},<!<u\'{!}\',!>},<,>}},{{<!>,<!>},<oauu<}!!\'!!!>!!{e!!!>!!!>},<!!!>,<!\'>},{{{<!!}!>,<!!\'!>},<}a,o<{a!!!!\'u!!!>!!!>!!!>!>>},<o!>},<a!>!!!>a}!>},<}"a!!"!>,<u"ai>},{<!!!>,<e!>},<a!!oe">}},{{},<!!!>!!!!!>!>{!!\'!<!>,<!!!!">}},{{<a<!!i"!!!>,!>},<!>a!{>},{{{<!!!>!!!>!!"!>,<!!!!{<!!!>},<o!>},<!>,<>,<\'!o\'oe{!!\',\'!>,<!!!a!i!>a>}},<}!>},<>}}},{{{<>,{{<i!!<o!>,<!>,<!>,<",>},{}}}},{{{},{{},{<>}}}},{{{<!>},<!!!>!!!!!!!>!!e}<!!!!!!{!>},<e!!!>!}{>,<!!!>!<ii!,!>e!!i{o!>,<>},{{{<a!!!!!>,<!!!!!!!>!!!>}!!uo,a!!{!!!>!"ee!>!>,<>}},<!"\'!ou<o{!>>}},{{{<}!!!>,<!>},<e{o,!!!>},<!><!!ii{!>!>},<u!>,<>},<{!!!!\'!!!>}>}},{{{<eie!!<!!"!>},<}!!}!>,<e!>,<>,<!!!>,<!!!!{>},{<!>},<au"\'o!!!>!!i,,{u!!!><!>},<!!!>,u>,<a!!i>},{<}{!>},<!eu\',!!!!u!>>}},{},{{<!>},<!>},<!!i,,!>,<!!i!!}o}i!!!>\'}a>,{<i!!{u!>,<}>,{<e!!!!!>i!>,<!>,<!!!>a!!!!!><o!!!><>}}},{{{<>},{<e!>!>,<\'a!!!!i!>,<"o!!!>\'uo,<>}},{{{}},{<>},{{}}}},{}}}}},{{{{<!!!>o">},<"a!>,<,i!!}!!!>},<!>,<>}},{{{}},{<{>},{<!>"\'!>!!!!\'>,<<}!>},<"!!!!!>,<a{>}}},{{{{},{{<i},!!>},{<!!!>!!,!!<i{a!>o>}},{}},{{<!ei!>},<"au!>},<!!e}{>},{{},<!!!>!!!>i,}!>},!>},<"!i!>,<!!>}},{{{},{}},{<!ea!>},<oe!!!!!>,<o!!!!<!>},<>}}},{{{{},{{{{<o{!>,<!!!>!!!{!>},<{o>}}},{{}}}},{{{{},<!>},<!>\'!>},<!>,<i<!>,<"u!{a!!u}}>}},{{}}}},{<<!>},<>,{<{!>,<i!>!>"<}u!!<{a}{{"},!>>}},{{{<!>!!!>,<!!!!""a!>},<u!>},<{"!u!>},<"a!o!!!<!>,<}>}}}},{{<{e,!>\'<a}e}a!!!a!>!!!>}!!!>>},{{<",o!!!!\'!>,<e!!!!!>!>e,,a<o{<>,<>},{{<a"\'{!!!>{!>,<u!>},<\'>,{{<!!i"i<,,!!{!>e!!!!!!!>!!<!!e\'ae\'>,<<,!!!!!>""\'{!!i>}}},{{{<{>}}}},{{{<!a!!!>o\'!!!>!!!>{!!>},{<o"i{,!>},<\'!!e{!>>}},<i!>,<!!!>!o!>},<{,<eie>}}}}},{{{{{}}},{{<!>,<a>},<!!e!!,u!>{"!!!!!>u!>},<e"<"o>},{}},{{{}},{{},<">},{<""!!!,a<}{!!e\'>}}},{{{{<ee!!ui!!!>!o,>},{<{}u!!>}},{<!!!i>,<eu!!<!>},<e>},{{<i!>},<!o!>!>,<u>},<<,\'}!ii!>},<\'{>}},{{{<!{u"\'!,!<\'}!>o}<!!!>{e>},<u}o>},{{<!}!ea,!!""}a>}}},{{{{<!!e<o!>},<!!<>},{<"<>,{<"u!o!e}o,!a!!o>,{}}},{}},{{{<<!{"!>,<!>u,!>},<!>},<!!!!"!>o,!!<!!!!}!!>,<<u!>,<!!!>a!>,<{{\'{!!{!>},<\'<ue>},{{<o<!>},<}>}}}}},{{{},<i!!e!>},<i!!!!!!e{>},{},{{}}},{{{<!!aa!>>,{<>}}},{<<!>},<!>!i{!!!!!>\'",!>},<u!{>,{<!>!i!i"!>,<<!>},<,!>},<}!!,{e!u!!!!!<,e!!!!\'e>}},{{<!!>},{}}},{{<!>"a!!}!>},<!>,!\'<>,{<!>!!"a!>!!!><,!!,ae\'"a\'">}}}},{{},{<,!>,<!!,u!!!!e!!!>\'u>,{<{!!!u,"u!>,<o>}},{<!>},<o!>u!<>,<ie\'!>,<aa!>!!!>{ea!!,\'!>},<i{>}}},{{{{{{},{<}!!ui\'!!"u}e!\'\'!>,<{e!>!>},<\'!!i!>>}}},{{<o}<}i!!""!!>},{{<!>},<!}"!>,<e!>>},{<{{oe>}}},{{{},{<\'!!!,e<,{{\'}!!{ia>,{{<!!!>{!!ei!>},<<>},{}}}},{<<i!>,<!>,<}!!!>,<!"o!!oo>,{<}\'i!!!>{i!!}}i<,!>!!o>}}}},{{<<!o!>},<,{a!>},<{<!!!e!!!>\'!!a!!o!>,<o>,{{<!>,<a""}!"!!!>>}}},{{<uo!!>,<eae,>},{{<!>{,<"au,<">}},{{{<!>\'\'i!>,<oa,<!>,<}oo>}}}},{{{<<,}>}},{<,!!!>!!<{{!!e!>},<!!!>},<i!>i{u{>,<"!>},<!>a\'!e!>},<\'!!!!!{a>},{{}}}},{{{},{{{<!>,!}\'"!!!>!!"!>},<!!!>a!>,<!>},<!>},<{}!!!{\'!>,<>}}}},{{<!>},<}!>,<eu>}}},{{<"!i!aeae}u\'e!>,<u{!!!>!>,<>,<!>},<!>,<,"!!u>},{}}},{{{{<<}!!!>i"!>},<u!!{!!>,<!>!u!><o<\'o!>!>}o!>,<!>,<!,oo>},{{{<<!>oe!!}"">},<!>},<!!!!!>u>},{},{<>}},{<!!!>"i!!u!>,<,!!!>},<!!!>e"!!<!>,<!!!><!>,<}a!!!>!>>}},{{<e!!,{!!!>!!!!!!<!>},<{uie>},<o<!!e>},{{<,i!>,<!!!!a!!o!e!!!!<!>!!!>>},{<!!!>!>,<!>e>}}},{{<{e}!!!>!>},<"!!!\'!>},<o{!!i,o{>},{{{{{<}"u!<,a!>,<!!a!>},<}!}ii}<}}i!>},<>}},{}},{<e{}a<!!}uo\'!>,<!!u!!!>a>,{}}},{{{},<oi"o>},{{<\'!>},<>},<!>o!>,<""!!ue!!!!!>!!!>{!>,<ii"}>}}},{<u{!!!!!>,e!>},!>\'iu">}},{{{<}a!>},<oe{o}a}u!<,,!!!>}!!!!o>,{<!>,<e!!!>i!>,<"!!}!!a>}},<!!\'"oe!!!>},<{!!!>!>,<>},{{},<!!"<!>,<uo!>,!>!!!>,<iooaieoa{,>},{{{{<\'e!!eei!>},<"!>},<a!!!>!e!>!>,"">}}}}},{{<!!",!!,e>},{<!>oe,,\'!,!>""a!!<e>}}}}}}';

const state = {
    INIT: 0,
    GROUP: 1,
    GARBAGE: 2,
};

const process = stream => {
    let score = 0;
    let depth = 0;
    let garbage = 0;
    let currently = state.GROUP;

    for (let pos = 0; pos < stream.length; pos++) {
        let c = stream[pos];
        switch (c) {
            case '!':
                pos++; // skip the next character
                break;
            case '{':
                if (currently === state.GROUP) {
                    depth++;
                } else {
                    garbage++;
                }
                break;
            case '}':
                if (currently === state.GROUP) {
                    score += depth;
                    depth--;
                } else {
                    garbage++;
                }
                break;
            case '<':
                if (currently === state.GROUP) {
                    currently = state.GARBAGE;
                } else {
                    garbage++;
                }
                break;
            case '>':
                if (currently === state.GARBAGE) {
                    currently = state.GROUP;
                }
                break;
            default:
                if (currently === state.GARBAGE) {
                    // console.log(c);
                    garbage++;
                }
        }
    }
    return { score, garbage };
};

const cases = [
    '{}', // score of 1.
    '{{{}}}', // score of 1 + 2 + 3 = 6.
    '{{},{}}', // score of 1 + 2 + 2 = 5.
    '{{{},{},{{}}}}', // score of 1 + 2 + 3 + 3 + 3 + 4 = 16.
    '{<a>,<a>,<a>,<a>}', // score of 1.
    '{{<ab>},{<ab>},{<ab>},{<ab>}}', // score of 1 + 2 + 2 + 2 + 2 = 9.
    '{{<!!>},{<!!>},{<!!>},{<!!>}}', // score of 1 + 2 + 2 + 2 + 2 = 9.
    '{{<a!>},{<a!>},{<a!>},{<ab>}}', // score of 1 + 2 = 3.
];

// cases.forEach((test, idx) => console.log(`${idx} :`, process(test)));

console.log(process(input)); // { score: 14190, garbage: 7053 }
