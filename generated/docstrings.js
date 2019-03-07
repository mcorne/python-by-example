var docstrings = {
    "abs": "Return&nbsp;the&nbsp;absolute&nbsp;value&nbsp;of&nbsp;the&nbsp;argument.",
    "all": "Return&nbsp;True&nbsp;if&nbsp;bool(x)&nbsp;is&nbsp;True&nbsp;for&nbsp;all&nbsp;values&nbsp;x&nbsp;in&nbsp;the&nbsp;iterable.<br>\n<br>\nIf&nbsp;the&nbsp;iterable&nbsp;is&nbsp;empty,&nbsp;return&nbsp;True.",
    "any": "Return&nbsp;True&nbsp;if&nbsp;bool(x)&nbsp;is&nbsp;True&nbsp;for&nbsp;any&nbsp;x&nbsp;in&nbsp;the&nbsp;iterable.<br>\n<br>\nIf&nbsp;the&nbsp;iterable&nbsp;is&nbsp;empty,&nbsp;return&nbsp;False.",
    "ascii": "Return&nbsp;an&nbsp;ASCII-only&nbsp;representation&nbsp;of&nbsp;an&nbsp;object.<br>\n<br>\nAs&nbsp;repr(),&nbsp;return&nbsp;a&nbsp;string&nbsp;containing&nbsp;a&nbsp;printable&nbsp;representation&nbsp;of&nbsp;an<br>\nobject,&nbsp;but&nbsp;escape&nbsp;the&nbsp;non-ASCII&nbsp;characters&nbsp;in&nbsp;the&nbsp;string&nbsp;returned&nbsp;by<br>\nrepr()&nbsp;using&nbsp;&#92;&#92;x,&nbsp;&#92;&#92;u&nbsp;or&nbsp;&#92;&#92;U&nbsp;escapes.&nbsp;This&nbsp;generates&nbsp;a&nbsp;string&nbsp;similar<br>\nto&nbsp;that&nbsp;returned&nbsp;by&nbsp;repr()&nbsp;in&nbsp;Python&nbsp;2.",
    "bin": "Return&nbsp;the&nbsp;binary&nbsp;representation&nbsp;of&nbsp;an&nbsp;integer.<br>\n<br>\n&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;bin(2796202)<br>\n&nbsp;&nbsp;&nbsp;'0b1010101010101010101010'",
    "bool": "bool(x)&nbsp;-&gt;&nbsp;bool<br>\n<br>\nReturns&nbsp;True&nbsp;when&nbsp;the&nbsp;argument&nbsp;x&nbsp;is&nbsp;true,&nbsp;False&nbsp;otherwise.<br>\nThe&nbsp;builtins&nbsp;True&nbsp;and&nbsp;False&nbsp;are&nbsp;the&nbsp;only&nbsp;two&nbsp;instances&nbsp;of&nbsp;the&nbsp;class&nbsp;bool.<br>\nThe&nbsp;class&nbsp;bool&nbsp;is&nbsp;a&nbsp;subclass&nbsp;of&nbsp;the&nbsp;class&nbsp;int,&nbsp;and&nbsp;cannot&nbsp;be&nbsp;subclassed.",
    "bytearray": "bytearray(iterable_of_ints)&nbsp;-&gt;&nbsp;bytearray<br>\nbytearray(string,&nbsp;encoding[,&nbsp;errors])&nbsp;-&gt;&nbsp;bytearray<br>\nbytearray(bytes_or_buffer)&nbsp;-&gt;&nbsp;mutable&nbsp;copy&nbsp;of&nbsp;bytes_or_buffer<br>\nbytearray(int)&nbsp;-&gt;&nbsp;bytes&nbsp;array&nbsp;of&nbsp;size&nbsp;given&nbsp;by&nbsp;the&nbsp;parameter&nbsp;initialized&nbsp;with&nbsp;null&nbsp;bytes<br>\nbytearray()&nbsp;-&gt;&nbsp;empty&nbsp;bytes&nbsp;array<br>\n<br>\nConstruct&nbsp;a&nbsp;mutable&nbsp;bytearray&nbsp;object&nbsp;from:<br>\n&nbsp;&nbsp;-&nbsp;an&nbsp;iterable&nbsp;yielding&nbsp;integers&nbsp;in&nbsp;range(256)<br>\n&nbsp;&nbsp;-&nbsp;a&nbsp;text&nbsp;string&nbsp;encoded&nbsp;using&nbsp;the&nbsp;specified&nbsp;encoding<br>\n&nbsp;&nbsp;-&nbsp;a&nbsp;bytes&nbsp;or&nbsp;a&nbsp;buffer&nbsp;object<br>\n&nbsp;&nbsp;-&nbsp;any&nbsp;object&nbsp;implementing&nbsp;the&nbsp;buffer&nbsp;API.<br>\n&nbsp;&nbsp;-&nbsp;an&nbsp;integer",
    "bytes": "bytes(iterable_of_ints)&nbsp;-&gt;&nbsp;bytes<br>\nbytes(string,&nbsp;encoding[,&nbsp;errors])&nbsp;-&gt;&nbsp;bytes<br>\nbytes(bytes_or_buffer)&nbsp;-&gt;&nbsp;immutable&nbsp;copy&nbsp;of&nbsp;bytes_or_buffer<br>\nbytes(int)&nbsp;-&gt;&nbsp;bytes&nbsp;object&nbsp;of&nbsp;size&nbsp;given&nbsp;by&nbsp;the&nbsp;parameter&nbsp;initialized&nbsp;with&nbsp;null&nbsp;bytes<br>\nbytes()&nbsp;-&gt;&nbsp;empty&nbsp;bytes&nbsp;object<br>\n<br>\nConstruct&nbsp;an&nbsp;immutable&nbsp;array&nbsp;of&nbsp;bytes&nbsp;from:<br>\n&nbsp;&nbsp;-&nbsp;an&nbsp;iterable&nbsp;yielding&nbsp;integers&nbsp;in&nbsp;range(256)<br>\n&nbsp;&nbsp;-&nbsp;a&nbsp;text&nbsp;string&nbsp;encoded&nbsp;using&nbsp;the&nbsp;specified&nbsp;encoding<br>\n&nbsp;&nbsp;-&nbsp;any&nbsp;object&nbsp;implementing&nbsp;the&nbsp;buffer&nbsp;API.<br>\n&nbsp;&nbsp;-&nbsp;an&nbsp;integer",
    "callable": "Return&nbsp;whether&nbsp;the&nbsp;object&nbsp;is&nbsp;callable&nbsp;(i.e.,&nbsp;some&nbsp;kind&nbsp;of&nbsp;function).<br>\n<br>\nNote&nbsp;that&nbsp;classes&nbsp;are&nbsp;callable,&nbsp;as&nbsp;are&nbsp;instances&nbsp;of&nbsp;classes&nbsp;with&nbsp;a<br>\n__call__()&nbsp;method.",
    "chr": "Return&nbsp;a&nbsp;Unicode&nbsp;string&nbsp;of&nbsp;one&nbsp;character&nbsp;with&nbsp;ordinal&nbsp;i;&nbsp;0&nbsp;&lt;=&nbsp;i&nbsp;&lt;=&nbsp;0x10ffff.",
    "classmethod": "classmethod(function)&nbsp;-&gt;&nbsp;method<br>\n<br>\nConvert&nbsp;a&nbsp;function&nbsp;to&nbsp;be&nbsp;a&nbsp;class&nbsp;method.<br>\n<br>\nA&nbsp;class&nbsp;method&nbsp;receives&nbsp;the&nbsp;class&nbsp;as&nbsp;implicit&nbsp;first&nbsp;argument,<br>\njust&nbsp;like&nbsp;an&nbsp;instance&nbsp;method&nbsp;receives&nbsp;the&nbsp;instance.<br>\nTo&nbsp;declare&nbsp;a&nbsp;class&nbsp;method,&nbsp;use&nbsp;this&nbsp;idiom:<br>\n<br>\n&nbsp;&nbsp;class&nbsp;C:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@classmethod<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;f(cls,&nbsp;arg1,&nbsp;arg2,&nbsp;...):<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>\n<br>\nIt&nbsp;can&nbsp;be&nbsp;called&nbsp;either&nbsp;on&nbsp;the&nbsp;class&nbsp;(e.g.&nbsp;C.f())&nbsp;or&nbsp;on&nbsp;an&nbsp;instance<br>\n(e.g.&nbsp;C().f()).&nbsp;&nbsp;The&nbsp;instance&nbsp;is&nbsp;ignored&nbsp;except&nbsp;for&nbsp;its&nbsp;class.<br>\nIf&nbsp;a&nbsp;class&nbsp;method&nbsp;is&nbsp;called&nbsp;for&nbsp;a&nbsp;derived&nbsp;class,&nbsp;the&nbsp;derived&nbsp;class<br>\nobject&nbsp;is&nbsp;passed&nbsp;as&nbsp;the&nbsp;implied&nbsp;first&nbsp;argument.<br>\n<br>\nClass&nbsp;methods&nbsp;are&nbsp;different&nbsp;than&nbsp;C++&nbsp;or&nbsp;Java&nbsp;static&nbsp;methods.<br>\nIf&nbsp;you&nbsp;want&nbsp;those,&nbsp;see&nbsp;the&nbsp;staticmethod&nbsp;builtin.",
    "complex": "Create&nbsp;a&nbsp;complex&nbsp;number&nbsp;from&nbsp;a&nbsp;real&nbsp;part&nbsp;and&nbsp;an&nbsp;optional&nbsp;imaginary&nbsp;part.<br>\n<br>\nThis&nbsp;is&nbsp;equivalent&nbsp;to&nbsp;(real&nbsp;+&nbsp;imag*1j)&nbsp;where&nbsp;imag&nbsp;defaults&nbsp;to&nbsp;0.",
    "delattr": "Deletes&nbsp;the&nbsp;named&nbsp;attribute&nbsp;from&nbsp;the&nbsp;given&nbsp;object.<br>\n<br>\ndelattr(x,&nbsp;'y')&nbsp;is&nbsp;equivalent&nbsp;to&nbsp;``del&nbsp;x.y''",
    "dict": "dict()&nbsp;-&gt;&nbsp;new&nbsp;empty&nbsp;dictionary<br>\ndict(mapping)&nbsp;-&gt;&nbsp;new&nbsp;dictionary&nbsp;initialized&nbsp;from&nbsp;a&nbsp;mapping&nbsp;object's<br>\n&nbsp;&nbsp;&nbsp;&nbsp;(key,&nbsp;value)&nbsp;pairs<br>\ndict(iterable)&nbsp;-&gt;&nbsp;new&nbsp;dictionary&nbsp;initialized&nbsp;as&nbsp;if&nbsp;via:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;=&nbsp;{}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;k,&nbsp;v&nbsp;in&nbsp;iterable:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d[k]&nbsp;=&nbsp;v<br>\ndict(**kwargs)&nbsp;-&gt;&nbsp;new&nbsp;dictionary&nbsp;initialized&nbsp;with&nbsp;the&nbsp;name=value&nbsp;pairs<br>\n&nbsp;&nbsp;&nbsp;&nbsp;in&nbsp;the&nbsp;keyword&nbsp;argument&nbsp;list.&nbsp;&nbsp;For&nbsp;example:&nbsp;&nbsp;dict(one=1,&nbsp;two=2)",
    "dir": "dir([object])&nbsp;-&gt;&nbsp;list&nbsp;of&nbsp;strings<br>\n<br>\nIf&nbsp;called&nbsp;without&nbsp;an&nbsp;argument,&nbsp;return&nbsp;the&nbsp;names&nbsp;in&nbsp;the&nbsp;current&nbsp;scope.<br>\nElse,&nbsp;return&nbsp;an&nbsp;alphabetized&nbsp;list&nbsp;of&nbsp;names&nbsp;comprising&nbsp;(some&nbsp;of)&nbsp;the&nbsp;attributes<br>\nof&nbsp;the&nbsp;given&nbsp;object,&nbsp;and&nbsp;of&nbsp;attributes&nbsp;reachable&nbsp;from&nbsp;it.<br>\nIf&nbsp;the&nbsp;object&nbsp;supplies&nbsp;a&nbsp;method&nbsp;named&nbsp;__dir__,&nbsp;it&nbsp;will&nbsp;be&nbsp;used;&nbsp;otherwise<br>\nthe&nbsp;default&nbsp;dir()&nbsp;logic&nbsp;is&nbsp;used&nbsp;and&nbsp;returns:<br>\n&nbsp;&nbsp;for&nbsp;a&nbsp;module&nbsp;object:&nbsp;the&nbsp;module's&nbsp;attributes.<br>\n&nbsp;&nbsp;for&nbsp;a&nbsp;class&nbsp;object:&nbsp;&nbsp;its&nbsp;attributes,&nbsp;and&nbsp;recursively&nbsp;the&nbsp;attributes<br>\n&nbsp;&nbsp;&nbsp;&nbsp;of&nbsp;its&nbsp;bases.<br>\n&nbsp;&nbsp;for&nbsp;any&nbsp;other&nbsp;object:&nbsp;its&nbsp;attributes,&nbsp;its&nbsp;class's&nbsp;attributes,&nbsp;and<br>\n&nbsp;&nbsp;&nbsp;&nbsp;recursively&nbsp;the&nbsp;attributes&nbsp;of&nbsp;its&nbsp;class's&nbsp;base&nbsp;classes.",
    "divmod": "Return&nbsp;the&nbsp;tuple&nbsp;(x//y,&nbsp;x%y).&nbsp;&nbsp;Invariant:&nbsp;div*y&nbsp;+&nbsp;mod&nbsp;==&nbsp;x.",
    "enumerate": "Return&nbsp;an&nbsp;enumerate&nbsp;object.<br>\n<br>\n&nbsp;&nbsp;iterable<br>\n&nbsp;&nbsp;&nbsp;&nbsp;an&nbsp;object&nbsp;supporting&nbsp;iteration<br>\n<br>\nThe&nbsp;enumerate&nbsp;object&nbsp;yields&nbsp;pairs&nbsp;containing&nbsp;a&nbsp;count&nbsp;(from&nbsp;start,&nbsp;which<br>\ndefaults&nbsp;to&nbsp;zero)&nbsp;and&nbsp;a&nbsp;value&nbsp;yielded&nbsp;by&nbsp;the&nbsp;iterable&nbsp;argument.<br>\n<br>\nenumerate&nbsp;is&nbsp;useful&nbsp;for&nbsp;obtaining&nbsp;an&nbsp;indexed&nbsp;list:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;(0,&nbsp;seq[0]),&nbsp;(1,&nbsp;seq[1]),&nbsp;(2,&nbsp;seq[2]),&nbsp;...",
    "eval": "Evaluate&nbsp;the&nbsp;given&nbsp;source&nbsp;in&nbsp;the&nbsp;context&nbsp;of&nbsp;globals&nbsp;and&nbsp;locals.<br>\n<br>\nThe&nbsp;source&nbsp;may&nbsp;be&nbsp;a&nbsp;string&nbsp;representing&nbsp;a&nbsp;Python&nbsp;expression<br>\nor&nbsp;a&nbsp;code&nbsp;object&nbsp;as&nbsp;returned&nbsp;by&nbsp;compile().<br>\nThe&nbsp;globals&nbsp;must&nbsp;be&nbsp;a&nbsp;dictionary&nbsp;and&nbsp;locals&nbsp;can&nbsp;be&nbsp;any&nbsp;mapping,<br>\ndefaulting&nbsp;to&nbsp;the&nbsp;current&nbsp;globals&nbsp;and&nbsp;locals.<br>\nIf&nbsp;only&nbsp;globals&nbsp;is&nbsp;given,&nbsp;locals&nbsp;defaults&nbsp;to&nbsp;it.",
    "filter": "filter(function&nbsp;or&nbsp;None,&nbsp;iterable)&nbsp;--&gt;&nbsp;filter&nbsp;object<br>\n<br>\nReturn&nbsp;an&nbsp;iterator&nbsp;yielding&nbsp;those&nbsp;items&nbsp;of&nbsp;iterable&nbsp;for&nbsp;which&nbsp;function(item)<br>\nis&nbsp;true.&nbsp;If&nbsp;function&nbsp;is&nbsp;None,&nbsp;return&nbsp;the&nbsp;items&nbsp;that&nbsp;are&nbsp;true.",
    "float": "Convert&nbsp;a&nbsp;string&nbsp;or&nbsp;number&nbsp;to&nbsp;a&nbsp;floating&nbsp;point&nbsp;number,&nbsp;if&nbsp;possible.",
    "format": "Return&nbsp;value.__format__(format_spec)<br>\n<br>\nformat_spec&nbsp;defaults&nbsp;to&nbsp;the&nbsp;empty&nbsp;string.<br>\nSee&nbsp;the&nbsp;Format&nbsp;Specification&nbsp;Mini-Language&nbsp;section&nbsp;of&nbsp;help('FORMATTING')&nbsp;for<br>\ndetails.",
    "frozenset": "frozenset()&nbsp;-&gt;&nbsp;empty&nbsp;frozenset&nbsp;object<br>\nfrozenset(iterable)&nbsp;-&gt;&nbsp;frozenset&nbsp;object<br>\n<br>\nBuild&nbsp;an&nbsp;immutable&nbsp;unordered&nbsp;collection&nbsp;of&nbsp;unique&nbsp;elements.",
    "getattr": "getattr(object,&nbsp;name[,&nbsp;default])&nbsp;-&gt;&nbsp;value<br>\n<br>\nGet&nbsp;a&nbsp;named&nbsp;attribute&nbsp;from&nbsp;an&nbsp;object;&nbsp;getattr(x,&nbsp;'y')&nbsp;is&nbsp;equivalent&nbsp;to&nbsp;x.y.<br>\nWhen&nbsp;a&nbsp;default&nbsp;argument&nbsp;is&nbsp;given,&nbsp;it&nbsp;is&nbsp;returned&nbsp;when&nbsp;the&nbsp;attribute&nbsp;doesn't<br>\nexist;&nbsp;without&nbsp;it,&nbsp;an&nbsp;exception&nbsp;is&nbsp;raised&nbsp;in&nbsp;that&nbsp;case.",
    "globals": "Return&nbsp;the&nbsp;dictionary&nbsp;containing&nbsp;the&nbsp;current&nbsp;scope's&nbsp;global&nbsp;variables.<br>\n<br>\nNOTE:&nbsp;Updates&nbsp;to&nbsp;this&nbsp;dictionary&nbsp;*will*&nbsp;affect&nbsp;name&nbsp;lookups&nbsp;in&nbsp;the&nbsp;current<br>\nglobal&nbsp;scope&nbsp;and&nbsp;vice-versa.",
    "hasattr": "Return&nbsp;whether&nbsp;the&nbsp;object&nbsp;has&nbsp;an&nbsp;attribute&nbsp;with&nbsp;the&nbsp;given&nbsp;name.<br>\n<br>\nThis&nbsp;is&nbsp;done&nbsp;by&nbsp;calling&nbsp;getattr(obj,&nbsp;name)&nbsp;and&nbsp;catching&nbsp;AttributeError.",
    "hash": "Return&nbsp;the&nbsp;hash&nbsp;value&nbsp;for&nbsp;the&nbsp;given&nbsp;object.<br>\n<br>\nTwo&nbsp;objects&nbsp;that&nbsp;compare&nbsp;equal&nbsp;must&nbsp;also&nbsp;have&nbsp;the&nbsp;same&nbsp;hash&nbsp;value,&nbsp;but&nbsp;the<br>\nreverse&nbsp;is&nbsp;not&nbsp;necessarily&nbsp;true.",
    "hex": "Return&nbsp;the&nbsp;hexadecimal&nbsp;representation&nbsp;of&nbsp;an&nbsp;integer.<br>\n<br>\n&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;hex(12648430)<br>\n&nbsp;&nbsp;&nbsp;'0xc0ffee'",
    "id": "Return&nbsp;the&nbsp;identity&nbsp;of&nbsp;an&nbsp;object.<br>\n<br>\nThis&nbsp;is&nbsp;guaranteed&nbsp;to&nbsp;be&nbsp;unique&nbsp;among&nbsp;simultaneously&nbsp;existing&nbsp;objects.<br>\n(CPython&nbsp;uses&nbsp;the&nbsp;object's&nbsp;memory&nbsp;address.)",
    "int": "int([x])&nbsp;-&gt;&nbsp;integer<br>\nint(x,&nbsp;base=10)&nbsp;-&gt;&nbsp;integer<br>\n<br>\nConvert&nbsp;a&nbsp;number&nbsp;or&nbsp;string&nbsp;to&nbsp;an&nbsp;integer,&nbsp;or&nbsp;return&nbsp;0&nbsp;if&nbsp;no&nbsp;arguments<br>\nare&nbsp;given.&nbsp;&nbsp;If&nbsp;x&nbsp;is&nbsp;a&nbsp;number,&nbsp;return&nbsp;x.__int__().&nbsp;&nbsp;For&nbsp;floating&nbsp;point<br>\nnumbers,&nbsp;this&nbsp;truncates&nbsp;towards&nbsp;zero.<br>\n<br>\nIf&nbsp;x&nbsp;is&nbsp;not&nbsp;a&nbsp;number&nbsp;or&nbsp;if&nbsp;base&nbsp;is&nbsp;given,&nbsp;then&nbsp;x&nbsp;must&nbsp;be&nbsp;a&nbsp;string,<br>\nbytes,&nbsp;or&nbsp;bytearray&nbsp;instance&nbsp;representing&nbsp;an&nbsp;integer&nbsp;literal&nbsp;in&nbsp;the<br>\ngiven&nbsp;base.&nbsp;&nbsp;The&nbsp;literal&nbsp;can&nbsp;be&nbsp;preceded&nbsp;by&nbsp;'+'&nbsp;or&nbsp;'-'&nbsp;and&nbsp;be&nbsp;surrounded<br>\nby&nbsp;whitespace.&nbsp;&nbsp;The&nbsp;base&nbsp;defaults&nbsp;to&nbsp;10.&nbsp;&nbsp;Valid&nbsp;bases&nbsp;are&nbsp;0&nbsp;and&nbsp;2-36.<br>\nBase&nbsp;0&nbsp;means&nbsp;to&nbsp;interpret&nbsp;the&nbsp;base&nbsp;from&nbsp;the&nbsp;string&nbsp;as&nbsp;an&nbsp;integer&nbsp;literal.<br>\n&gt;&gt;&gt;&nbsp;int('0b100',&nbsp;base=0)<br>\n4",
    "isinstance": "Return&nbsp;whether&nbsp;an&nbsp;object&nbsp;is&nbsp;an&nbsp;instance&nbsp;of&nbsp;a&nbsp;class&nbsp;or&nbsp;of&nbsp;a&nbsp;subclass&nbsp;thereof.<br>\n<br>\nA&nbsp;tuple,&nbsp;as&nbsp;in&nbsp;``isinstance(x,&nbsp;(A,&nbsp;B,&nbsp;...))``,&nbsp;may&nbsp;be&nbsp;given&nbsp;as&nbsp;the&nbsp;target&nbsp;to<br>\ncheck&nbsp;against.&nbsp;This&nbsp;is&nbsp;equivalent&nbsp;to&nbsp;``isinstance(x,&nbsp;A)&nbsp;or&nbsp;isinstance(x,&nbsp;B)<br>\nor&nbsp;...``&nbsp;etc.",
    "issubclass": "Return&nbsp;whether&nbsp;'cls'&nbsp;is&nbsp;a&nbsp;derived&nbsp;from&nbsp;another&nbsp;class&nbsp;or&nbsp;is&nbsp;the&nbsp;same&nbsp;class.<br>\n<br>\nA&nbsp;tuple,&nbsp;as&nbsp;in&nbsp;``issubclass(x,&nbsp;(A,&nbsp;B,&nbsp;...))``,&nbsp;may&nbsp;be&nbsp;given&nbsp;as&nbsp;the&nbsp;target&nbsp;to<br>\ncheck&nbsp;against.&nbsp;This&nbsp;is&nbsp;equivalent&nbsp;to&nbsp;``issubclass(x,&nbsp;A)&nbsp;or&nbsp;issubclass(x,&nbsp;B)<br>\nor&nbsp;...``&nbsp;etc.",
    "len": "Return&nbsp;the&nbsp;number&nbsp;of&nbsp;items&nbsp;in&nbsp;a&nbsp;container.",
    "list": "Built-in&nbsp;mutable&nbsp;sequence.<br>\n<br>\nIf&nbsp;no&nbsp;argument&nbsp;is&nbsp;given,&nbsp;the&nbsp;constructor&nbsp;creates&nbsp;a&nbsp;new&nbsp;empty&nbsp;list.<br>\nThe&nbsp;argument&nbsp;must&nbsp;be&nbsp;an&nbsp;iterable&nbsp;if&nbsp;specified.",
    "locals": "Return&nbsp;a&nbsp;dictionary&nbsp;containing&nbsp;the&nbsp;current&nbsp;scope's&nbsp;local&nbsp;variables.<br>\n<br>\nNOTE:&nbsp;Whether&nbsp;or&nbsp;not&nbsp;updates&nbsp;to&nbsp;this&nbsp;dictionary&nbsp;will&nbsp;affect&nbsp;name&nbsp;lookups&nbsp;in<br>\nthe&nbsp;local&nbsp;scope&nbsp;and&nbsp;vice-versa&nbsp;is&nbsp;*implementation&nbsp;dependent*&nbsp;and&nbsp;not<br>\ncovered&nbsp;by&nbsp;any&nbsp;backwards&nbsp;compatibility&nbsp;guarantees.",
    "map": "map(func,&nbsp;*iterables)&nbsp;--&gt;&nbsp;map&nbsp;object<br>\n<br>\nMake&nbsp;an&nbsp;iterator&nbsp;that&nbsp;computes&nbsp;the&nbsp;function&nbsp;using&nbsp;arguments&nbsp;from<br>\neach&nbsp;of&nbsp;the&nbsp;iterables.&nbsp;&nbsp;Stops&nbsp;when&nbsp;the&nbsp;shortest&nbsp;iterable&nbsp;is&nbsp;exhausted.",
    "print": "print(value,&nbsp;...,&nbsp;sep='&nbsp;',&nbsp;end='&#92;n',&nbsp;file=sys.stdout,&nbsp;flush=False)<br>\n<br>\nPrints&nbsp;the&nbsp;values&nbsp;to&nbsp;a&nbsp;stream,&nbsp;or&nbsp;to&nbsp;sys.stdout&nbsp;by&nbsp;default.<br>\nOptional&nbsp;keyword&nbsp;arguments:<br>\nfile:&nbsp;&nbsp;a&nbsp;file-like&nbsp;object&nbsp;(stream);&nbsp;defaults&nbsp;to&nbsp;the&nbsp;current&nbsp;sys.stdout.<br>\nsep:&nbsp;&nbsp;&nbsp;string&nbsp;inserted&nbsp;between&nbsp;values,&nbsp;default&nbsp;a&nbsp;space.<br>\nend:&nbsp;&nbsp;&nbsp;string&nbsp;appended&nbsp;after&nbsp;the&nbsp;last&nbsp;value,&nbsp;default&nbsp;a&nbsp;newline.<br>\nflush:&nbsp;whether&nbsp;to&nbsp;forcibly&nbsp;flush&nbsp;the&nbsp;stream.",
    "str.capitalize": "Return&nbsp;a&nbsp;capitalized&nbsp;version&nbsp;of&nbsp;the&nbsp;string.<br>\n<br>\nMore&nbsp;specifically,&nbsp;make&nbsp;the&nbsp;first&nbsp;character&nbsp;have&nbsp;upper&nbsp;case&nbsp;and&nbsp;the&nbsp;rest&nbsp;lower<br>\ncase."
};