const questions = [
  {
    id: '43c98ce8-a07a-4dc2-80f6-c1b2a2485f06',
    text: 'مختلف معاملات سے متعلق پریشانی کا شکار ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: 'd50a597f-632b-4f7b-89e6-6d85b50fd1c9',
    text: 'آسانی سے دوست بنا لیتا /لیتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 1
  },
  {
    id: '888dd864-7449-4e96-8d5c-7a439603ea91',
    text: 'تصوراتی دنیا میں رہتا  /  رہتی ہوں۔',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: 'ce2fbbf8-7a97-4199-bda5-117e4ecdf3b6',
    text: 'دوسروں پر اعتماد  ہے۔',
    keyed: 'plus',
    domain: 'A',
    facet: 1
  },
  {
    id: 'c7f53c3c-2e77-432f-bb71-7470b67d3aa9',
    text: 'ذمہ داریوں کو کامیابی سےنمٹاتا ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: '48ad12ce-470e-4339-90ac-ea8c43a0103e',
    text: 'آسانی سےمشتعل ہوتا  / ہوتی  ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 2
  },
  {
    id: '458f3957-2359-4077-ade1-34525d633063',
    text: 'بڑی محافل کو پسند کرتا /کرتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 2
  },
  {
    id: '58d571e5-d725-4cf8-a438-32c16ee28eb6',
    text: 'فنون لطیفہ کی اہمیت سے واقف ہوں۔',
    keyed: 'plus',
    domain: 'O',
    facet: 2
  },
  {
    id: '0cf79e27-e702-45c2-9471-04ac96b58e0e',
    text: 'دوسروں کو اپنے مقاصد کی تکمیل کےلئے استعمال  کرتا /  کرتی ہوں ۔',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: 'cda1ca17-b599-4561-a6cd-ff9d36062d27',
    text: 'میں  صفائی پسند ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 2
  },
  {
    id: '5e8550d7-b8ef-4905-950a-f81d735d39e2',
    text: 'اکثر  اوقات افسردہ رہتا / رہتی ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 3
  },
  {
    id: '8af754f2-68e9-48f3-8c5d-2e6633d4472c',
    text: 'معاملات میں اپنی گرفت مضبوط رکھتا / رکھتی  ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 3
  },
  {
    id: '0727def6-3d18-4221-bf38-86b58f9f3eed',
    text: 'جذبات کا اظہار  شدت سے  کرتا/  کرتی ہوں  ۔',
    keyed: 'plus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'ccf3a5c8-fb50-4bd4-8e7a-22af3d657279',
    text: 'دوسروں کی مدد پسند  کرتا/  کرتی ہوں  ۔',
    keyed: 'plus',
    domain: 'A',
    facet: 3
  },
  {
    id: '73d84e5d-cbf5-47f0-b8cb-4d2159a52e32',
    text: 'وعدوں کی پاسداری  کرتا/  کرتی ہوں  ۔',
    keyed: 'plus',
    domain: 'C',
    facet: 3
  },
  {
    id: 'b2d9ef74-73f5-4ea8-b00c-7aaca15937df',
    text: 'دوسرے لوگوں سے رابطے میں مشکلات پیش آتی ہیں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 4
  },
  {
    id: '48a761ef-438e-409b-ae59-ea2ce8f84414',
    text: 'ہمیشہ مصروف رہتا /رہتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 4
  },
  {
    id: 'cae55842-8957-4e3b-83b3-ceff98fb9dcf',
    text: 'میں یکسانیت سے اکتا جاتا /جاتی ہوں۔',
    keyed: 'plus',
    domain: 'O',
    facet: 4
  },
  {
    id: 'e2028ad3-b128-4f76-be57-398bfe2aff22',
    text: 'میں جلدی ہمت نہیں ہارتا /ہارتی۔',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: 'b7fc949b-02b6-4cb9-a3e2-dbb3d824b55f',
    text: 'محنت کش  ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 4
  },
  {
    id: '481efd08-c810-43b1-a952-f8ac9052f96b',
    text: 'کھیل کود اور تفریح کو وقت دیتا/دیتی ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 5
  },
  {
    id: '987efee2-899f-4a65-b9b5-1589ef0460d7',
    text: 'جوش اور جذبہ کو پسند کرتا /کرتی  ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: 'e1e804c7-4a1d-498f-8610-f95147af9d1d',
    text: 'ادبی مواد پڑھنا پسند کرتا/کرتی ہوں',
    keyed: 'plus',
    domain: 'O',
    facet: 5
  },
  {
    id: '71029381-3908-4c68-91e1-e41fb45542a2',
    text: 'اپنے آپ کو دوسرے لوگوں سے بہتر سمجھتا/سمجھتی ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: 'f6076eea-56ae-4b46-97f1-5f94a7676c96',
    text: 'ہمیشہ تیار رہتا/رہتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 5
  },
  {
    id: '2f519935-92e8-48ad-9746-4a0f8b38466a',
    text: 'آسانی سے ذہنی دباؤ کا شکار ہو جاتا /جاتی ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 6
  },
  {
    id: '899c3f66-51d0-46ea-963a-6fc36d3b3cb9',
    text: 'زندہ دل ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: '79186f48-e7fa-4df4-b74b-b0627ee244e1',
    text: 'حریت پسند سیاسی جماعت سے دلچسپی ہے۔',
    keyed: 'plus',
    domain: 'O',
    facet: 6
  },
  {
    id: 'fd50e1ca-d9e0-4037-a7a1-a191d4db2d96',
    text: 'غریبوں کی فکر  رہتی ہے۔',
    keyed: 'plus',
    domain: 'A',
    facet: 6
  },
  {
    id: 'bd9eec0a-b68b-472c-8803-7db29c308cdb',
    text: 'بغیر سوچ سمجھ کے نتیجہ اخذ کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  },
  {
    id: '7f92ab2c-265c-4b84-8c74-09f9bb9d41a7',
    text: 'بد تر حالات سے خوف زدہ ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: 'af55f014-788c-4b6e-92c4-b2b59dc8a28d',
    text: 'مجمع میں آسودگی محسوس ہوتی ہے۔',
    keyed: 'plus',
    domain: 'E',
    facet: 1
  },
  {
    id: '08ff6dca-02a5-4aeb-aaa4-2ecf2526f143',
    text: 'تخيلاتی دنیا ميں رہناپسندہے۔',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: '6f66cdc0-9044-457b-b40d-501ecae15ee7',
    text: 'لوگوں کی نیک نیتی پر اعتبار کرتا/کرتی ہوں۔',
    keyed: 'plus',
    domain: 'A',
    facet: 1
  },
  {
    id: 'f110fc66-2e9e-413c-920b-19f05e63d7ac',
    text: 'میں ہر کام مہارت سے کرتا /کرتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: '7dab2a37-8635-4fc7-86b7-0abf13c183c9',
    text: 'عموماً مزاج  برا  رہتا ہے۔',
    keyed: 'plus',
    domain: 'N',
    facet: 2
  },
  {
    id: '28ab59a0-e7cd-4fce-94e3-bba2ecc023b6',
    text: 'محفل میں مختلف شعبہ زندگی  سےتعلق رکھنے والوں سےہم کلام ہو جاتا /جاتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 2
  },
  {
    id: 'b5919f2f-cded-4745-a9ce-c02703cee807',
    text: 'جو چیزیں لوگ نظر انداز کرتے ہیں ان میں اچھائی ڈھونڈتا  /ڈھونڈتی ہوں۔',
    keyed: 'plus',
    domain: 'O',
    facet: 2
  },
  {
    id: '5a5fa975-d024-4ac8-8845-2823f957c21b',
    text: 'آگے  بڑھنے کے لئے بے ایمانی سے کام لیتا /لیتی ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: 'adf33f9f-45bd-43e3-af25-4c491176d97f',
    text: 'اکثر اشیاء کو اپنی جگہ پر رکھنا بھول جاتا/جاتی ہوں ۔',
    keyed: 'minus',
    domain: 'C',
    facet: 2
  },
  {
    id: 'f0a14e16-d726-47e9-a2c1-647fd3d7d52e',
    text: 'اپنے آپ سے نفرت ہے۔',
    keyed: 'plus',
    domain: 'N',
    facet: 3
  },
  {
    id: '0b38e3d3-c15c-454c-b034-f4eb7ae1580a',
    text: 'دوسروں کی قیادت کرنا پسند ہے۔',
    keyed: 'plus',
    domain: 'E',
    facet: 3
  },
  {
    id: '5631b856-ff34-4f76-a0cd-edc7104c3bfa',
    text: 'دوسروں کی جذبات سمجھ سکتا /سکتی ہوں۔',
    keyed: 'plus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'ada867af-4db1-4e3d-a604-2b695c1806e5',
    text: 'دوسروں کی ضرورت کا خیال رہتا ہے۔',
    keyed: 'plus',
    domain: 'A',
    facet: 3
  },
  {
    id: 'c55e3958-00c4-4fc3-9118-47d8f31bfde1',
    text: 'سچ بولتا /بولتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 3
  },
  {
    id: 'acd8fadc-5399-4a67-b5ff-9d1ada049c01',
    text: 'اپنے آپ کو توجہ دینےسے ڈرتا/ڈرتی ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 4
  },
  {
    id: 'd07b6c67-0d02-4948-a997-bb84ac234cd8',
    text: 'ہمیشہ آگے بڑھنے کی کوشش کرتا/کرتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 4
  },
  {
    id: '33b81fd0-7e32-4cd8-a13a-d5f5f754f998',
    text: 'جن چیزوں کے بارے میں معلومات ہوں ان کا پابند ہوتا/ہوتی ہوں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 4
  },
  {
    id: 'd9a9a180-29c9-4ec5-8621-2256d411def7',
    text: 'میں زبان دراز ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: 'f12c3d9d-1d12-4aa6-ad2e-009cd0651cbb',
    text: 'میں توقعات سے بڑھ کر کام  کرتا/کرتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 4
  },
  {
    id: '9891b7ba-a494-4307-aafe-301d8db506c6',
    text: 'کبھی کبھار  کسی کام میں غیر ضروری طور پر مشغول رہتا /رہتی ہوں۔',
    keyed: 'minus',
    domain: 'N',
    facet: 5
  },
  {
    id: 'f1675af6-88bf-4376-a946-0281e762b39c',
    text: 'مہم جوئی پسند ہے۔',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: '95a3f20c-f933-4d19-a2c1-a7dbdf63c562',
    text: 'فلسفیانہ تبصرے  ناپسند ہیں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 5
  },
  {
    id: '7df44711-4cd4-4b05-8830-73fcc3ebdab5',
    text: 'اپنی ذات  کے بارے میں اونچا سوچتا /سوچتی ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: '9d3cb5c7-955c-43a4-b6c7-b07ed01dcbd9',
    text: 'اپنی معاملات کو منطقی انجام تک پہنچاتا /پہنچاتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 5
  },
  {
    id: '13c58810-3864-42ba-aa87-d4166f858756',
    text: 'مشکل سماجی حالات پریشان کرتیں ہیں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 6
  },
  {
    id: '961376e0-16a1-4c14-b059-789e63d11b63',
    text: 'موج مستی کرتا/کرتی ہوں ۔',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: 'f08e1b27-3673-4898-9cae-896482d0d9f9',
    text: '\u200fمیرےنزدیک جزا اور سزا کا کوئی معیار نہیں ہے۔',
    keyed: 'plus',
    domain: 'O',
    facet: 6
  },
  {
    id: 'c2038c12-7a37-47a8-9983-831bd6692aab',
    text: 'غریبوں سے ہمدردی ہے۔',
    keyed: 'plus',
    domain: 'A',
    facet: 6
  },
  {
    id: '956f3e17-ff17-4af5-a52f-9222b8968106',
    text: 'جلد بازی میں فیصلے کرتا /کرتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  },
  {
    id: '4d81238b-5407-47d4-88e5-dc0e38aa14f5',
    text: 'غلطی  کا خوف رہتا ہے۔',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: '9f9166f0-fa94-4c14-a91d-3eecd8395794',
    text: 'تعلقات قائم  کرنے سے اجتناب کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'E',
    facet: 1
  },
  {
    id: '23a1034f-fab7-4887-a66e-5ef4eaafb25e',
    text: 'تصورات میں رہنا پسند ہے۔',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: 'c63e6121-c3ed-40cc-abc2-c1e6ea1e0858',
    text: 'سنی سنائی باتوں پر یقین رکھتا/رکھتی ہوں۔',
    keyed: 'plus',
    domain: 'A',
    facet: 1
  },
  {
    id: '02ee1930-36a7-4caa-b10c-c93efb682a44',
    text: 'مشکل کام کو آسانی سے پورا کرتا/کرتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: 'da8e6ed1-2296-4c58-8fdb-66f2f591989b',
    text: 'غصےپر قابو نہیں ہے۔',
    keyed: 'plus',
    domain: 'N',
    facet: 2
  },
  {
    id: '03c10b30-b88f-4c63-8acc-71251ca24615',
    text: 'تنہائی پسند ہوں۔',
    keyed: 'minus',
    domain: 'E',
    facet: 2
  },
  {
    id: '751a04bc-5adf-485a-8ea4-4308406ae85b',
    text: 'شعر و شاعری پسند نہیں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 2
  },
  {
    id: '982e83c2-d34e-48da-9c71-78494ab05c85',
    text: 'دوسروں سے فائدہ لینے کی کوشش میں رہتا /رہتی ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: 'f4891687-0ff0-47af-a4f6-d1202c8f6676',
    text: 'کمرے میں چیزوں کو بکھرا چھوڑ دیتا/دیتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 2
  },
  {
    id: '743d8973-1de1-4485-91b4-8a5cf63e7d44',
    text: 'اکثر افسردہ رہتا/رہتی ہوں۔',
    keyed: 'plus',
    domain: 'N',
    facet: 3
  },
  {
    id: '2452f034-8273-4f71-9122-a40f5ead31ba',
    text: 'حالات پر قابو رکھتا/رکھتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 3
  },
  {
    id: '2a300001-6e05-4c79-b8b5-2ccae4c3d463',
    text: 'جذباتی تصورات کو خاطر میں نہیں لاتا/لاتی۔',
    keyed: 'minus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'cd54bd76-ca9c-4030-b325-bb8d896bcb3f',
    text: 'دوسروں کی جذبات کا احساس نہیں رکھتا/رکھتی۔',
    keyed: 'minus',
    domain: 'A',
    facet: 3
  },
  {
    id: '4e6e3a34-176f-4e6e-8730-1341611f972b',
    text: 'قوانین شکن ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 3
  },
  {
    id: '20062533-a33d-4c1e-9cd9-bff868015b3f',
    text: 'صرف دوستوں کی صحبت  خوشی دیتی ہے۔',
    keyed: 'plus',
    domain: 'N',
    facet: 4
  },
  {
    id: 'b2a077d5-1fe0-4b06-ab63-35455e001e54',
    text: 'میں فرصت کے لمحات کا بہترین استعمال کرتا/کرتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 4
  },
  {
    id: '0d2e65ab-95d9-482f-beb4-3239a3a4944a',
    text: 'تبدیلی کا خواہاں نہیں ہوں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 4
  },
  {
    id: '0de0f900-cede-4538-9c00-5da4f830b028',
    text: 'لوگوں کی تذ لیل کرتا/کرتی ہوں ۔',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: 'a9c97d6b-6721-4150-8d84-64ef3082f164',
    text: 'بقدر ضرورت کام کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 4
  },
  {
    id: '9f2e7f90-0ca5-4ed0-9fe5-e060238a9b5e',
    text: 'میں آسانی سے بکتا نہیں ہوں۔',
    keyed: 'minus',
    domain: 'N',
    facet: 5
  },
  {
    id: '7dd6cf2d-5c14-48c2-8ae5-633a7a596c71',
    text: 'لاؤبالی پن سے محظوظ  ہوتا /ہوتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: 'fecc35f7-681e-4889-a404-4a973a3dfef0',
    text: 'میں  دقیق  نظریات کو مشکل سے سمجھتا /سمجھتی ہوں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 5
  },
  {
    id: '1d686958-6fe7-432f-85e6-186b99e4e232',
    text: 'اپنے بارے میں بہت اچھی رائے ہے۔',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: 'c7db0ed8-df7d-49bf-942f-59e46ef743c4',
    text: 'وقت ضایع کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 5
  },
  {
    id: 'b7e0e393-9b21-4e0d-adf3-8f28fb5b9d87',
    text: 'ناامیدی کا شکار ہوں',
    keyed: 'plus',
    domain: 'N',
    facet: 6
  },
  {
    id: '79d956e8-1118-402a-a0e2-9380af18243e',
    text: 'زندگی سے پیار ہے۔',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: '96ba77b2-1a44-4dfd-95f9-ae4d1f714460',
    text: 'قد آمت پسند سیاسی جماعت سے دلچسپی ہے۔',
    keyed: 'minus',
    domain: 'O',
    facet: 6
  },
  {
    id: '77f54ab4-0fba-4efb-8700-066c7490eb87',
    text: 'دوسروں کے مسائل سے کوئی سرو کار نہیں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 6
  },
  {
    id: 'a354cf7c-8d11-46ac-acc5-da90d2048637',
    text: 'معاملات میں جلد بازی کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  },
  {
    id: '43b03992-3f32-4ed1-a6f8-5d6d3e7ed246',
    text: 'آسانی سے دوسروں کے دباوٗ میں آجاتا /آجاتی ہوں',
    keyed: 'plus',
    domain: 'N',
    facet: 1
  },
  {
    id: '41702602-08e4-4e2b-9a19-291d9efc581a',
    text: 'لوگوں کو اپنی طرف متوجہ کرناناپسند ہے۔',
    keyed: 'minus',
    domain: 'E',
    facet: 1
  },
  {
    id: '935a7413-abac-4f54-9169-d1fbd39da752',
    text: 'تصوراتی دنیا میں رہنا پسند ہے۔',
    keyed: 'plus',
    domain: 'O',
    facet: 1
  },
  {
    id: '432dbde8-8756-4ff0-80d5-f47018235139',
    text: 'دوسروں پر اعتبار نہیں کرتا/کرتی۔',
    keyed: 'minus',
    domain: 'A',
    facet: 1
  },
  {
    id: '5727c93f-317b-4af1-a686-77fc9fbc5033',
    text: 'معاملات نمٹانا جانتا /جانتی ہوں۔',
    keyed: 'plus',
    domain: 'C',
    facet: 1
  },
  {
    id: 'd32bd062-4eb2-401b-99b2-e7afea39ca9b',
    text: 'آسانی سے  چڑچڑاہٹ  کا شکار نہیں ہوتا/ہوتی۔',
    keyed: 'minus',
    domain: 'N',
    facet: 2
  },
  {
    id: '9a47184f-6046-4e68-a61b-3d9b357b86ea',
    text: 'ہجوم سے دور رہتا/رہتی ہوں۔',
    keyed: 'minus',
    domain: 'E',
    facet: 2
  },
  {
    id: '87c5b27e-59a8-4c48-8ba8-f5413d735693',
    text: 'عجائب گھروں کو شوق سے نہیں جاتا/ جاتی۔',
    keyed: 'minus',
    domain: 'O',
    facet: 2
  },
  {
    id: '11b20adb-abed-4363-894c-3dd823ae0540',
    text: 'دوسروں کے معاملات میں رکاوٹ ڈالتا/ڈالتی ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 2
  },
  {
    id: '50418d86-712c-45d9-adc4-ea0231c93cf5',
    text: 'میں اکثر  اپنی اشیاء بھول جاتا/جاتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 2
  },
  {
    id: 'f40e421f-6c24-4be2-bd9f-28d33358d8c6',
    text: 'Fمیں اپنے آپ سے بہت خوش ہوں۔',
    keyed: 'minus',
    domain: 'N',
    facet: 3
  },
  {
    id: '8791f37b-686f-47c3-9db7-74c009951321',
    text: 'دوسروں کی رہنمائی میں کام کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'E',
    facet: 3
  },
  {
    id: '4fd25155-9cc2-4cd6-8852-3e0ca2d5e95d',
    text: 'جذباتی لوگوں کو سمجھنا مشکل لگتا ہے۔',
    keyed: 'minus',
    domain: 'O',
    facet: 3
  },
  {
    id: 'b68af20d-24f9-4c27-85cc-fe0858994888',
    text: 'دوسروں کےلئے میرےپاس وقت نہیں ۔',
    keyed: 'minus',
    domain: 'A',
    facet: 3
  },
  {
    id: '54423933-0ebb-44a7-bdd9-2a9b100c70f2',
    text: 'میں اپنے وعدے پورے نہیں کرتا/کرتی ۔',
    keyed: 'minus',
    domain: 'C',
    facet: 3
  },
  {
    id: '7317848c-3e1b-422f-bb16-02efc504f677',
    text: 'حادثات آسانی سے پریشان نہیں کرتے۔',
    keyed: 'minus',
    domain: 'N',
    facet: 4
  },
  {
    id: '7d93e1ca-46e8-4a30-9623-42a80c9b420c',
    text: 'جذبات  کا اظہار  کم کرتا /کرتی ہوں۔',
    keyed: 'minus',
    domain: 'E',
    facet: 4
  },
  {
    id: 'a7f43928-8982-4ed5-8656-7a80346fe979',
    text: 'میں قد آمت پسند ہوں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 4
  },
  {
    id: '17910a55-a64a-4ed0-8b46-293e2fa2fe03',
    text: 'تعاون کرنے پر یقین نہیں رکھتا/رکھتی۔',
    keyed: 'minus',
    domain: 'A',
    facet: 4
  },
  {
    id: '3890bb43-2695-4b8d-b289-ee10d11cc884',
    text: 'مجھ میں حالات کا صحیح معنی میں مقابلہ کرنے کی سکت نہیں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 4
  },
  {
    id: '49a85680-53aa-4208-86b5-dccc7a6f8e37',
    text: 'اپنے نفس پر قابو پا سکتا ہوں۔',
    keyed: 'minus',
    domain: 'N',
    facet: 5
  },
  {
    id: '10f90fa9-649c-4631-ac4c-3dd3f751597d',
    text: 'خطرہ مول لیتا /لیتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 5
  },
  {
    id: 'b86de003-c3c4-4cc8-9385-5ac8a0142c34',
    text: 'مجھے مناظرے پسند نہیں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 5
  },
  {
    id: '80c1d149-7050-481a-9953-aefb441642e7',
    text: 'اپنی تعریفیں کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'A',
    facet: 5
  },
  {
    id: '51403620-968c-42fa-a772-65ba5ad8396f',
    text: 'کام کی شروعات مشکل لگتی ہیں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 5
  },
  {
    id: '88a3c2fe-3aa4-4f46-9322-da656332268a',
    text: 'مشکل حالات میں پرسکون رہتا /رہتی ہوں۔',
    keyed: 'minus',
    domain: 'N',
    facet: 6
  },
  {
    id: 'e7b31bdc-5f6b-40ec-ba91-f5919b0f170e',
    text: 'زندگی کی روشن پہلوؤں پر نظر رکھتا/رکھتی ہوں۔',
    keyed: 'plus',
    domain: 'E',
    facet: 6
  },
  {
    id: '580b08d1-3c94-46e9-9d07-d6d80c698127',
    text: 'جرم کی سختی سے سرکوبی پر یقین رکھتا/رکھتی ہوں۔',
    keyed: 'minus',
    domain: 'O',
    facet: 6
  },
  {
    id: '48bee420-60c0-45cd-be43-3893dbc1969a',
    text: 'ضرورت مند کا خیال نہیں کرتا/کرتی۔',
    keyed: 'minus',
    domain: 'A',
    facet: 6
  },
  {
    id: 'ea3327ea-3529-4be4-8e2d-2174731ae4d7',
    text: 'بلا سوچے سمجھے کام کرتا/کرتی ہوں۔',
    keyed: 'minus',
    domain: 'C',
    facet: 6
  }
]

export default questions
