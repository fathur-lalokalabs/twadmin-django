# -*- coding: utf-8 -*-
#
# Copyright (c) 2020 Xoxzo Europa OÜ.
#
# By accessing this code or using it in any form, you agree to abide by the terms
# as stated in LICENSE.txt which is included in this Software. If you do not have
# LICENSE.txt included, you can get one by contacting hello@xoxzo.eu.

from django.urls import path

from . import views

app_name = "examples"

urlpatterns = [
    path("", views.index, name="dashboard"),
]
