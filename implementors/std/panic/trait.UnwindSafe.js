(function() {var implementors = {};
implementors["cslice"] = [{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"cslice/struct.CSlice.html\" title=\"struct cslice::CSlice\">CSlice</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["cslice::CSlice"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"cslice/struct.CMutSlice.html\" title=\"struct cslice::CMutSlice\">CMutSlice</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["cslice::CMutSlice"]}];
implementors["neon"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/context/struct.Lock.html\" title=\"struct neon::context::Lock\">Lock</a>&lt;'a&gt;","synthetic":true,"types":["neon::context::Lock"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/context/struct.ExecuteContext.html\" title=\"struct neon::context::ExecuteContext\">ExecuteContext</a>&lt;'a&gt;","synthetic":true,"types":["neon::context::ExecuteContext"]},{"text":"impl&lt;'a, 'outer&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/context/struct.ComputeContext.html\" title=\"struct neon::context::ComputeContext\">ComputeContext</a>&lt;'a, 'outer&gt;","synthetic":true,"types":["neon::context::ComputeContext"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/context/struct.TaskContext.html\" title=\"struct neon::context::TaskContext\">TaskContext</a>&lt;'a&gt;","synthetic":true,"types":["neon::context::TaskContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"neon/context/enum.CallKind.html\" title=\"enum neon::context::CallKind\">CallKind</a>","synthetic":true,"types":["neon::context::CallKind"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/handle/struct.Handle.html\" title=\"struct neon::handle::Handle\">Handle</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["neon::handle::Handle"]},{"text":"impl&lt;F, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/handle/struct.DowncastError.html\" title=\"struct neon::handle::DowncastError\">DowncastError</a>&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["neon::handle::DowncastError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsBuffer.html\" title=\"struct neon::types::JsBuffer\">JsBuffer</a>","synthetic":true,"types":["neon::types::binary::JsBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsArrayBuffer.html\" title=\"struct neon::types::JsArrayBuffer\">JsArrayBuffer</a>","synthetic":true,"types":["neon::types::binary::JsArrayBuffer"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.BinaryData.html\" title=\"struct neon::types::BinaryData\">BinaryData</a>&lt;'a&gt;","synthetic":true,"types":["neon::types::binary::BinaryData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsError.html\" title=\"struct neon::types::JsError\">JsError</a>","synthetic":true,"types":["neon::types::error::JsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsValue.html\" title=\"struct neon::types::JsValue\">JsValue</a>","synthetic":true,"types":["neon::types::JsValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsUndefined.html\" title=\"struct neon::types::JsUndefined\">JsUndefined</a>","synthetic":true,"types":["neon::types::JsUndefined"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsNull.html\" title=\"struct neon::types::JsNull\">JsNull</a>","synthetic":true,"types":["neon::types::JsNull"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsBoolean.html\" title=\"struct neon::types::JsBoolean\">JsBoolean</a>","synthetic":true,"types":["neon::types::JsBoolean"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsString.html\" title=\"struct neon::types::JsString\">JsString</a>","synthetic":true,"types":["neon::types::JsString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.StringOverflow.html\" title=\"struct neon::types::StringOverflow\">StringOverflow</a>","synthetic":true,"types":["neon::types::StringOverflow"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsNumber.html\" title=\"struct neon::types::JsNumber\">JsNumber</a>","synthetic":true,"types":["neon::types::JsNumber"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsObject.html\" title=\"struct neon::types::JsObject\">JsObject</a>","synthetic":true,"types":["neon::types::JsObject"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsArray.html\" title=\"struct neon::types::JsArray\">JsArray</a>","synthetic":true,"types":["neon::types::JsArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/types/struct.JsFunction.html\" title=\"struct neon::types::JsFunction\">JsFunction</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["neon::types::JsFunction"]},{"text":"impl&lt;'a, T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/borrow/struct.Ref.html\" title=\"struct neon::borrow::Ref\">Ref</a>&lt;'a, T&gt;","synthetic":true,"types":["neon::borrow::Ref"]},{"text":"impl&lt;'a, T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/borrow/struct.RefMut.html\" title=\"struct neon::borrow::RefMut\">RefMut</a>&lt;'a, T&gt;","synthetic":true,"types":["neon::borrow::RefMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"neon/borrow/enum.LoanError.html\" title=\"enum neon::borrow::LoanError\">LoanError</a>","synthetic":true,"types":["neon::borrow::LoanError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/result/struct.Throw.html\" title=\"struct neon::result::Throw\">Throw</a>","synthetic":true,"types":["neon::result::Throw"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/context/struct.ModuleContext.html\" title=\"struct neon::context::ModuleContext\">ModuleContext</a>&lt;'a&gt;","synthetic":false,"types":["neon::context::ModuleContext"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"neon/object/trait.This.html\" title=\"trait neon::object::This\">This</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon/context/struct.CallContext.html\" title=\"struct neon::context::CallContext\">CallContext</a>&lt;'a, T&gt;","synthetic":false,"types":["neon::context::CallContext"]}];
implementors["neon_sys"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon_sys/struct.Local.html\" title=\"struct neon_sys::Local\">Local</a>","synthetic":true,"types":["neon_sys::Local"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon_sys/struct.Isolate__.html\" title=\"struct neon_sys::Isolate__\">Isolate__</a>","synthetic":true,"types":["neon_sys::Isolate__"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon_sys/struct.HandleScope.html\" title=\"struct neon_sys::HandleScope\">HandleScope</a>","synthetic":true,"types":["neon_sys::HandleScope"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon_sys/struct.EscapableHandleScope.html\" title=\"struct neon_sys::EscapableHandleScope\">EscapableHandleScope</a>","synthetic":true,"types":["neon_sys::EscapableHandleScope"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon_sys/struct.CCallback.html\" title=\"struct neon_sys::CCallback\">CCallback</a>","synthetic":true,"types":["neon_sys::CCallback"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"neon_sys/struct.InheritedHandleScope.html\" title=\"struct neon_sys::InheritedHandleScope\">InheritedHandleScope</a>","synthetic":true,"types":["neon_sys::InheritedHandleScope"]}];
implementors["semver"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"semver/struct.Version.html\" title=\"struct semver::Version\">Version</a>","synthetic":true,"types":["semver::version::Version"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"semver/struct.VersionReq.html\" title=\"struct semver::VersionReq\">VersionReq</a>","synthetic":true,"types":["semver::version_req::VersionReq"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"semver/enum.Identifier.html\" title=\"enum semver::Identifier\">Identifier</a>","synthetic":true,"types":["semver::version::Identifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"semver/enum.SemVerError.html\" title=\"enum semver::SemVerError\">SemVerError</a>","synthetic":true,"types":["semver::version::SemVerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"semver/enum.ReqParseError.html\" title=\"enum semver::ReqParseError\">ReqParseError</a>","synthetic":true,"types":["semver::version_req::ReqParseError"]}];
implementors["semver_parser"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"semver_parser/version/struct.Version.html\" title=\"struct semver_parser::version::Version\">Version</a>","synthetic":true,"types":["semver_parser::version::Version"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"semver_parser/version/enum.Identifier.html\" title=\"enum semver_parser::version::Identifier\">Identifier</a>","synthetic":true,"types":["semver_parser::version::Identifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"semver_parser/range/struct.VersionReq.html\" title=\"struct semver_parser::range::VersionReq\">VersionReq</a>","synthetic":true,"types":["semver_parser::range::VersionReq"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"semver_parser/range/struct.Predicate.html\" title=\"struct semver_parser::range::Predicate\">Predicate</a>","synthetic":true,"types":["semver_parser::range::Predicate"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"semver_parser/range/enum.WildcardVersion.html\" title=\"enum semver_parser::range::WildcardVersion\">WildcardVersion</a>","synthetic":true,"types":["semver_parser::range::WildcardVersion"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"semver_parser/range/enum.Op.html\" title=\"enum semver_parser::range::Op\">Op</a>","synthetic":true,"types":["semver_parser::range::Op"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()